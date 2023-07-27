'use server';

import { getAuthSession } from '@/src/auth/nextauth-option';
import { prisma } from '@/src/db/prisma';
import { ProfileFormType } from './ProfileForm';

export const editProfile = async (values: ProfileFormType) => {
  const session = await getAuthSession();

  if (!session) {
    throw new Error('You must be logged in to edit your profile');
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      ...values,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 500));

  return '/profile';
};
