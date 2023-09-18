import fastify from "fastify";

import { PrismaClient } from '@prisma/client';

const app = fastify();

const prisma = new PrismaClient();

app.get('/postgres', async () =>{
  const users = await prisma.cars.findMany();
  return users;
})

app.listen({
  port: 3333,
}).then( () =>{
  console.log("O server esta rodando na porta 3333")
})