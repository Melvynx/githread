import { WritePostForm } from '@/app/write/WritePostForm';
import { createPost } from '@/app/write/write.action';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { getAuthSession } from '@/src/auth/nextauth-option';
import { prisma } from '@/src/db/prisma';
import { signIn } from 'next-auth/react';

export default async function Modal() {
  const session = await getAuthSession();

  console.log('Modal Component');
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

  console.log('Render Modal');

  return (
    <Dialog open={true}>
      <DialogContent>
        <WritePostForm user={user} onSubmit={createPost} />
      </DialogContent>
    </Dialog>
  );
}
