import { PrismaClient } from '@prisma/client';

const primsa = new PrismaClient();

// 👉 CREATE
async function createUser() {
  const user = await primsa.user.create({
    data: {
      username: 'Harsh',
      age: 22,
      todo: {
        create: [{ title: 'Go to gym', description: 'Leg day workout' }],
      },
    },
    include: { todo: true },
  });

  console.log('Created User:', user);
}

// 👉 READ
async function getUsers() {
  const users = await primsa.user.findMany({ include: { todo: true } });

  console.dir(users, { depth: null });
}

// 👉 UPDATE
async function updateTodo() {
  const todo = await primsa.todo.update({
    where: { id: 1 },
    data: { status: true },
  });

  console.log('Updated Todo:', todo);
}
