import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const insertIntoDb = async (data: Category): Promise<Category> => {
  const category = await prisma.category.create({
    data,
  });
  return category;
};

export const CategoryService = {
  insertIntoDb,
};
