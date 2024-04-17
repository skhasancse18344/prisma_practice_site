import { PrismaClient, Profile, User } from "@prisma/client";

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
const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });
  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  }
  const result = await prisma.profile.create({
    data,
  });
  return result;
};

const getUser = async () => {
  const user = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  return user;
};
const getSingleUser = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
  return user;
};

export const UserService = {
  insertIntoDb,
  insertOrUpdateProfile,
  getUser,
  getSingleUser,
};
