"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@prisma/client";
import clsx from "clsx";
import { useState } from "react";

export const CardClient = ({ user }: { user: User }) => {
  const [select, setSelected] = useState(false);

  return (
    <Card
      key={user.id}
      className={clsx("border-2 border-accent", {
        "border-red-500": select,
      })}
    >
      <CardHeader className="flex flex-row items-start gap-4">
        <Avatar size="default">
          <AvatarImage src={user.image || ""} alt={user.name ?? ""} />
          <AvatarFallback>{user.name?.[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{user.username}</CardTitle>
          <CardDescription>
            {user.email} + {window.location.href}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>{user.bio}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => setSelected((prev) => !prev)}
          variant={select ? "destructive" : "default"}
        >
          {select ? "Selected" : "Select"}
        </Button>
      </CardFooter>
    </Card>
  );
};
