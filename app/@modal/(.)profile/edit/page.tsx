import { createPost } from '@/app/write/write.action';
import { getAuthSession } from '@/src/auth/nextauth-option';
import { prisma } from '@/src/db/prisma';
import { signIn } from 'next-auth/react';
import { EditModal } from './EditModal';
import { editProfile } from '@/app/profile/edit/edit-profile.action';
import { getUserEdit } from '@/src/db/query/user.query';
import notFound from '@/app/users/[userId]/not-found';

export default async function Modal() {
  const session = await getAuthSession();

  if (!session?.user.id) {
    notFound();
    return;
  }

  const user = await getUserEdit(session.user.id);

  if (!user) {
    throw new Error('User not found');
  }

  return <EditModal user={user} editProfile={editProfile} />;
}
