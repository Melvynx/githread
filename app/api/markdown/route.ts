import { NextResponse } from "next/server";

const markdown = `# My article about how to learn code

To learn code you need to learn how to code.

## How to learn code

1. Learn how to code
2. Learn how to learn how to code
3. Learn how to learn how to learn how to code
4. Learn how to learn how to learn how to learn how to code

This is a demo : 

\`\`\`js
console.log('Hello world');
\`\`\`
`;

export const GET = async () => {
  await new Promise((r) => {
    setTimeout(() => {
      r("");
    }, 1000);
  });

  return NextResponse.json({ markdown });
};
