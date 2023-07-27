import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Loader } from '@/components/ui/loader';
import { Skeleton } from '@/components/ui/skeleton';
import { PostHome } from '@/src/db/query/post.query';
import clsx from 'clsx';
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';

type PostProps = {
  post: PostHome;
  className?: string;
};

export const PostPlaceholder = () => {
  return (
    <div className={clsx('flex w-full flex-row items-start p-4')}>
      <Avatar size="default">
        <AvatarFallback>
          <Loader />
        </AvatarFallback>
      </Avatar>
      <div className="ml-4 flex w-full flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-4" />
          <button>
            <MoreHorizontal size={20} />
          </button>
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-full" />
        <div className="flex gap-4 items-center">
          <button
            className={clsx(
              'rounded-md hover:bg-accent flex gap-1 items-center',
              {}
            )}
          >
            <Heart size={20} />
          </button>
          <span className="rounded-md hover:bg-accent flex gap-1 items-center">
            <MessageCircle size={20} />
          </span>
        </div>
        <div>
          <span className="text-muted-foreground text-sm">
            <Skeleton className="h-6 w-4 inline-block" /> likes
          </span>
          {' ‧ '}
          <span className="text-muted-foreground text-sm">
            <Skeleton className="h-6 w-4 inline-block" /> replies
          </span>
        </div>
      </div>
    </div>
  );
};
