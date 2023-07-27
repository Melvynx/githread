'use server';

import { getAuthSession } from '@/src/auth/nextauth-option';
import { prisma } from '@/src/db/prisma';
import { revalidatePath } from 'next/cache';

export const likeAction = async (postId: string) => {
  const session = await getAuthSession();

  if (!session?.user.id) {
    return;
  }

  const isLiked = await prisma.like.findFirst({
    where: {
      postId,
      userId: session.user.id,
    },
  });

  if (isLiked) {
    await prisma.like.delete({
      where: {
        id: isLiked.id,
      },
    });
  } else {
    await prisma.like.create({
      data: {
        postId,
        userId: session.user.id,
      },
    });
  }

  revalidatePath('/');
  revalidatePath(`/posts/${postId}`);
};
