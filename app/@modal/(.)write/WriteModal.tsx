'use client';

import { WritePostForm, WritePostFormType } from '@/app/write/WritePostForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { User } from '@prisma/client';
import { usePathname, useRouter } from 'next/navigation';

export const WriteModal = ({
  user,
  createPost,
}: {
  user: User;
  createPost: (values: WritePostFormType) => Promise<string | void>;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Dialog
      open={pathname?.includes('/write')}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <WritePostForm
          user={user}
          onSubmit={async (values) => {
            const result = await createPost(values);
            return result;
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
