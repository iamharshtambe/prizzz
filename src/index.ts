import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUser() {
  const user = await prisma.user.findFirst({
    where: { id: 1 },
    include: { todos: true },
  });

  console.log(user);
}

getUser();
