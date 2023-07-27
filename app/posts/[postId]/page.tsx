import { getAuthSession } from '@/src/auth/nextauth-option';
import { getPostView } from '@/src/db/query/post.query';
import { Post } from '@/src/features/post/Post';
import { clsx } from 'clsx';

export default async function PostView({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const session = await getAuthSession();
  const post = await getPostView(params.postId, session?.user.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="divide-y divide-accent">
      {post.parent && <Post post={post.parent} key={post.parent.id} />}
      <div
        className={clsx({
          'ml-10': post.parent,
        })}
      >
        <Post post={post} key={post.id} />
        <div className="divide-y divide-accent ml-10">
          {post.replies.map((reply) => {
            return <Post post={reply} key={reply.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
