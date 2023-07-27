import { Prisma } from '@prisma/client';
import { prisma } from '../prisma';

export const postSelectQuery = (userId?: string) =>
  ({
    id: true,
    content: true,
    createdAt: true,
    user: {
      select: {
        image: true,
        username: true,
        name: true,
        id: true,
      },
    },
    _count: {
      select: {
        likes: true,
        replies: true,
      },
    },
    likes: {
      select: {
        userId: true,
      },
      where: {
        userId: userId ?? 'error',
      },
    },
  } satisfies Prisma.PostSelect);

export const get20LastPosts = (userId?: string) =>
  prisma.post.findMany({
    take: 20,

    orderBy: {
      createdAt: 'desc',
    },
    where: {
      parentId: null,
    },
    select: postSelectQuery(userId),
  });

export const getPostView = (id: string, userId?: string) =>
  prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      ...postSelectQuery(userId),
      replies: {
        select: {
          ...postSelectQuery(userId),
        },
      },

      parent: {
        select: {
          ...postSelectQuery(userId),
        },
      },
    },
  });

export const getPost = (id: string, userId?: string) =>
  prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      ...postSelectQuery(userId),
    },
  });

export type PostHome = Prisma.PromiseReturnType<typeof get20LastPosts>[number];
