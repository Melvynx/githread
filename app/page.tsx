import { getAuthSession } from '@/src/auth/nextauth-option';
import { get20LastPosts } from '@/src/db/query/post.query';
import { Post } from '@/src/features/post/Post';

export default async function Home() {
  const session = await getAuthSession();
  const last10Posts = await get20LastPosts(session?.user.id);

  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="divide-y divide-accent">
      {last10Posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}
