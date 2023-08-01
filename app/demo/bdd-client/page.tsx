import { prisma } from '@/src/db/prisma';
import { CardClient } from './CardClient';

export default async function page() {
  const users = await prisma.user.findMany();
  return (
    <div className="mt-4">
      <ul className="flex flex-col gap-4">
        {users.map((user) => (
          <CardClient user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
}
