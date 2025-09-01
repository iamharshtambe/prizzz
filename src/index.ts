import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 👉 CREATE
async function createUser() {
  const user = await prisma.user.create({
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
  const users = await prisma.user.findMany({ include: { todo: true } });

  console.dir(users, { depth: null });
}

// 👉 UPDATE
async function updateTodo() {
  const todo = await prisma.todo.update({
    where: { id: 1 },
    data: { status: true },
  });

  console.log('Updated Todo:', todo);
}

// 👉 DELETE
async function deleteUser() {
  const user = await prisma.user.delete({
    where: { id: 1 },
  });
  console.log('Deleted User:', user);
}
