import { prisma } from '@/src/db/prisma';
import { PropsWithChildren } from 'react';

export const ServerComponent = async (props: PropsWithChildren) => {
  const firstUser = await prisma.user.findFirst();
  return (
    <div className=" p-4 border-4 border-dashed border-blue-500 bg-blue-500/50 rounded">
      <div>
        Server component <span className="font-bold">{firstUser?.email}</span>
      </div>
      {props.children}
    </div>
  );
};