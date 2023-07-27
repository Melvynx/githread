'use client';

import { WritePostForm, WritePostFormType } from '@/app/write/WritePostForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';

export const WriteModal = ({
  user,
  createPost,
}: {
  user: User;
  createPost: (values: WritePostFormType) => Promise<string | void>;
}) => {
  const router = useRouter();
  return (
    <Dialog
      open={true}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <WritePostForm
          user={user}
          onSubmit={async (values) => {
            const result = await createPost(values);
            router.back();
            return result;
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
