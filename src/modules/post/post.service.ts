import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDb = (data: Post): Promise<Post> => {
  const result = prisma.post.create({
    data,
  });
  return result;
};

export const PostService = {
  insertIntoDb,
};
