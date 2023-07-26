import { PostHome } from '@/src/db/query/post.query';
import { Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { PostWrapper } from './PostWrapper';

type PostProps = {
  post: PostHome;
  className?: string;
};

export const Post = ({ post }: PostProps) => {
  return (
    <PostWrapper user={post.user} createdAt={post.createdAt} postId={post.id}>
      <p className="text-sm text-foreground">{post.content}</p>
      <div className="flex gap-4 items-center">
        <div className="rounded-md hover:bg-accent flex gap-1 items-center">
          <Heart size={20} />
        </div>

        <div className="rounded-md hover:bg-accent flex gap-1 items-center">
          <MessageCircle size={20} />
        </div>
      </div>
      <div>
        <Link className="text-muted-foreground text-sm" href={`/posts/${post.id}`}>
          {post._count.replies} replies
        </Link>
        {' ‧ '}
        <Link className="text-muted-foreground text-sm" href={`/posts/${post.id}`}>
          {post._count.replies} replies
        </Link>
      </div>
    </PostWrapper>
  );
};
