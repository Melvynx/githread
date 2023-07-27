import { PostHome } from '@/src/db/query/post.query';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { LikeButton } from './LikeButton';
import { PostWrapper } from './PostWrapper';

type PostProps = {
  post: PostHome;
  className?: string;
};

export const Post = ({ post }: PostProps) => {
  return (
    <PostWrapper user={post.user} createdAt={post.createdAt} postId={post.id}>
      <Link href={`/posts/${post.id}`} className="text-sm text-foreground">
        {post.content}
      </Link>
      <div className="flex gap-4 items-center">
        <LikeButton postId={post.id} isLiked={post.likes.length > 0} />
        <Link
          href={`/posts/${post.id}/reply`}
          className="rounded-md hover:bg-accent flex gap-1 items-center"
        >
          <MessageCircle size={20} />
        </Link>
      </div>
      <div>
        <Link className="text-muted-foreground text-sm" href={`/posts/${post.id}`}>
          {post._count.likes} likes
        </Link>
        {' ‧ '}
        <Link className="text-muted-foreground text-sm" href={`/posts/${post.id}`}>
          {post._count.replies} replies
        </Link>
      </div>
    </PostWrapper>
  );
};
