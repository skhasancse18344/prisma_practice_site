import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();
const insertIntoDb = async (data: User): Promise<User> => {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      role: data.role,
    },
  });
  return user;
};

export const UserService = {
  insertIntoDb,
};
