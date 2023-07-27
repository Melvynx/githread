import { Button, buttonVariants } from '@/components/ui/button';
import { getAuthSession } from '@/src/auth/nextauth-option';
import { prisma } from '@/src/db/prisma';
import { getUserProfile } from '@/src/db/query/user.query';
import { Post } from '@/src/features/post/Post';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Profile } from './Profile';
import { followUser } from './follow.action';

export async function generateMetadata({
  params,
}: {
  params: { userId: string };
}): Promise<Metadata> {
  const user = await getUserProfile(params.userId);

  if (!user) {
    return {
      title: 'User not found',
    };
  }

  return {
    title: `${user.name} (@${user.username})`,
  };
}

export default async function User({
  params,
}: {
  params: {
    userId: string;
  };
}) {
  const session = await getAuthSession();
  const user = await getUserProfile(params.userId);

  if (!user) {
    notFound();
  }

  const isFollower = session?.user.id
    ? await prisma.follow.findFirst({
        where: {
          followerId: session?.user?.id,
          followingId: user.id,
        },
      })
    : false;

  const isCurrent = session?.user.id === user.id;

  return (
    <div className="container">
      <Profile user={user} />
      <div className="mt-4 border-b border-accent pb-4">
        {isCurrent ? (
          <Link
            href="/profile/edit"
            className={buttonVariants({
              variant: 'outline',
            })}
          >
            Edit profile
          </Link>
        ) : null}
        {!isCurrent ? (
          <form>
            <Button
              formAction={async () => {
                'use server';
                await followUser(user.id);
              }}
              variant="outline"
            >
              {isFollower ? 'Unfollow' : 'Follow'}
            </Button>
          </form>
        ) : null}
      </div>
      <div className="divide-y divide-accent">
        {user.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
