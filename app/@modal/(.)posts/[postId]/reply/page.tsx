import { createPostReply } from '@/app/posts/[postId]/reply/write-reply.action';
import { getAuthSession } from '@/src/auth/nextauth-option';
import { prisma } from '@/src/db/prisma';
import { getPost } from '@/src/db/query/post.query';
import { signIn } from 'next-auth/react';
import { ReplyModal } from './ReplyModal';

export default async function page({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const session = await getAuthSession();

  if (!session?.user.id) {
    await signIn();
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const post = await getPost(params.postId, session.user.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <ReplyModal
      user={user}
      createPostReply={async (values) => {
        'use server';
        return createPostReply(post.id, values);
      }}
    />
  );
}
