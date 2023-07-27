'use server';

import { WritePostFormType } from '@/app/write/WritePostForm';
import { getAuthSession } from '@/src/auth/nextauth-option';
import { prisma } from '@/src/db/prisma';
import { redirect } from 'next/navigation';

export const createPostReply = async (
  parentId: string,
  values: WritePostFormType
) => {
  const session = await getAuthSession();

  if (!session?.user.id) {
    throw new Error('You must be logged in to do this.');
  }

  const post = await prisma.post.create({
    data: {
      content: values.content,
      userId: session.user.id,
      parentId: parentId,
    },
  });

  // fake timer because sqlite is too fast
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    redirect(`/posts/${parentId}`);
  } catch (error) {
    return `/posts/${parentId}`;
  }
};
