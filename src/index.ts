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
