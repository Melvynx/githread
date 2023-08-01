import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/src/db/prisma';

export const CountOfPost = async () => {
  const postsCount = await prisma.post.count();

  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Number of post</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{postsCount}</p>
      </CardContent>
    </Card>
  );
};
