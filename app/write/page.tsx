import { getAuthSession } from '@/src/auth/nextauth-option';
import { prisma } from '@/src/db/prisma';
import { signIn } from 'next-auth/react';
import { WritePostForm } from './WritePostForm';
import { createPost } from './write.action';

export default async function page() {
  const session = await getAuthSession();

  if (!session?.user.id) {
    await signIn();
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return (
    <div className="w-full">
      <WritePostForm user={user} onSubmit={createPost} />
    </div>
  );
}
