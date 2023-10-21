import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/src/db/prisma";
import NameLengthChart from "./NameLengthGraph";

export const NameLength = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Name length graph</CardTitle>
      </CardHeader>
      <CardContent>
        <NameLengthChart users={users} />
      </CardContent>
    </Card>
  );
};
