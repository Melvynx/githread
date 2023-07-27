import { Prisma } from '@prisma/client';
import { prisma } from '../prisma';
import { postSelectQuery } from './post.query';

const userQuery = {
  id: true,
  name: true,
  username: true,
  image: true,
  bio: true,
  createdAt: true,
  link: true,
} satisfies Prisma.UserSelect;

export const getUserProfile = (userId: string) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      ...userQuery,
      _count: {
        select: {
          followed: true,
          likes: true,
        },
      },
      posts: {
        select: {
          ...postSelectQuery(userId),
        },
        take: 10,
        orderBy: {
          createdAt: 'desc',
        },
      },
      followed: {
        select: {
          follower: {
            select: {
              id: true,
              image: true,
              username: true,
            },
          },
        },
        take: 3,
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });
};

export const getUserEdit = (userId: string) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },

    select: {
      ...userQuery,
    },
  });
};

export type UserProfile = NonNullable<
  Prisma.PromiseReturnType<typeof getUserProfile>
>;

export type UserEdit = NonNullable<Prisma.PromiseReturnType<typeof getUserEdit>>;
