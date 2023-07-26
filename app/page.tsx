import { get20LastPosts } from '@/src/db/query/post.query';
import { Post } from '@/src/features/post/Post';

export default async function Home() {
  const last10Posts = await get20LastPosts();

  return (
    <div className="divide-y divide-accent">
      {last10Posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}
