import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const insertIntoDb = async (data: Category): Promise<Category> => {
  const category = await prisma.category.create({
    data,
  });
  return category;
};
const getAllCategory = async () => {
  const result = await prisma.category.findMany({
    include: {
      posts: true,
    },
  });
  return result;
};

export const CategoryService = {
  insertIntoDb,
  getAllCategory,
};
