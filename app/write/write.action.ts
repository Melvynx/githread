'use server';

import { getAuthSession } from '@/src/auth/nextauth-option';
import { prisma } from '@/src/db/prisma';
import { redirect } from 'next/navigation';
import { WritePostFormType } from './WritePostForm';

export const createPost = async (values: WritePostFormType) => {
  console.log('createPost', values);
  const session = await getAuthSession();

  if (!session?.user.id) {
    throw new Error('You must be logged in to do this.');
  }

  const post = await prisma.post.create({
    data: {
      content: values.content,
      userId: session.user.id,
    },
  });

  try {
    redirect(`/posts/${post.id}`);
  } catch (error) {
    return `/posts/${post.id}`;
  }
};
