import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDb = (data: Post): Promise<Post> => {
  const result = prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};
const getAllPost = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit);
  const take = parseInt(limit);
  return await prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
      skip,
      take,
      include: {
        author: true,
        category: true,
      },
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : { createdAt: "desc" },
      where: {
        // title: {
        //   contains: searchTerm,
        //   mode: "insensitive",
        // },
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    const total = await tx.post.count();

    return { data: result, total: total };
  });
};
const updatePost = async (
  id: number,
  payload: Partial<Post>
): Promise<Post> => {
  const result = await prisma.post.update({
    where: {
      id,
    },
    data: payload,
    include: {
      author: true,
      category: true,
    },
  });

  return result;
};
const deletePost = async (id: number) => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });
  return result;
};

export const PostService = {
  insertIntoDb,
  getAllPost,
  updatePost,
  deletePost,
};
