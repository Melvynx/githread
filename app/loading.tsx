import { PostPlaceholder } from '@/src/features/post/PostPlaceholder';

export default function loader() {
  return (
    <div className="divide-y divide-accent">
      {Array.from({ length: 20 }).map((_, index) => {
        return <PostPlaceholder key={index} />;
      })}
    </div>
  );
}
