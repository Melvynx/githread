import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/src/db/prisma';
import { LikesGraph } from './LikesGraph';

export const Likes = async () => {
  const postsWithLikes = (
    await prisma.post.findMany({
      select: {
        _count: {
          select: {
            likes: true,
          },
        },
      },
    })
  ).map((c) => c._count.likes);

  const likesCountFrequency = postsWithLikes.reduce<Record<number, number>>(
    (acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    },
    {}
  );

  const chartData = Object.entries(likesCountFrequency).map(
    ([likesCount, postCount]) => ({
      likesCount: Number(likesCount),
      postCount,
    })
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Name length graph</CardTitle>
      </CardHeader>
      <CardContent>
        <LikesGraph data={chartData} />
      </CardContent>
    </Card>
  );
};
