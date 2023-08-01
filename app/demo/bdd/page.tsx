import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { prisma } from '@/src/db/prisma';

export default async function page() {
  const users = await prisma.user.findMany();
  console.log({ users });
  return (
    <div className="mt-4">
      <ul className="flex flex-col gap-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader className="flex items-start gap-4">
              <Avatar size="default">
                <AvatarImage src={user.image || ''} alt={user.name ?? ''} />
                <AvatarFallback>{user.name?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{user.username}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{user.bio}</p>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}
