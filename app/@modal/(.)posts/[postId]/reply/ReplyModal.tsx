'use client';

import { WritePostForm, WritePostFormType } from '@/app/write/WritePostForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { User } from '@prisma/client';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export const ReplyModal = ({
  user,
  createPostReply,
}: {
  user: User;
  createPostReply: (values: WritePostFormType) => Promise<string | void>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Dialog
      open={pathname?.includes('/reply')}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <WritePostForm
          user={user}
          onSubmit={async (values) => {
            const result = await createPostReply(values);
            return result;
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
