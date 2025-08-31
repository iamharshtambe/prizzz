import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser() {
  await prisma.user.update({
    where: { id: 1 },
    data: { username: 'Sumit', password: 'Sumit@1455', age: 22 },
  });
}

createUser();
