"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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

export default function page() {
  return (
    <div className="flex flex-col gap-4 mt-4 items-start">
      <div className="prose">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
