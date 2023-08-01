import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { CountOfPost } from './CountOfPost';
import { Likes } from './Likes';
import { NameLength } from './NameLength';

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Streaming</h1>
      <Suspense fallback={<CardPlaceholder />}>
        <CountOfPost />
      </Suspense>

      <Suspense fallback={<CardPlaceholder />}>
        <Likes />
      </Suspense>

      <Suspense fallback={<CardPlaceholder />}>
        <NameLength />
      </Suspense>
    </div>
  );
}

const CardPlaceholder = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-full h-12" />
      </CardHeader>
      <CardContent>
        <Skeleton className="w-full h-24" />
      </CardContent>
    </Card>
  );
};
