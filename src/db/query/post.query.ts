import { Prisma } from '@prisma/client';
import { prisma } from '../prisma';

export const get20LastPosts = () =>
  prisma.post.findMany({
    take: 20,
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      content: true,
      createdAt: true,
      user: {
        select: {
          image: true,
          username: true,
          name: true,
        },
      },
      _count: {
        select: {
          likes: true,
          replies: true,
        },
      },
    },
  });

export type PostHome = Prisma.PromiseReturnType<typeof get20LastPosts>[number];
