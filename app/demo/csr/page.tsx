"use client";

import { Loader } from "@/components/ui/loader";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Page() {
  const [markdown, setMarkdown] = useState();

  useEffect(() => {
    fetch("/api/markdown")
      .then((r) => r.json())
      .then((json) => {
        const markdown = json.markdown;
        setMarkdown(markdown);
      });
  });

  if (!markdown) {
    return (
      <div>
        <p>Fetch data...</p>
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 mt-4 items-start">
      <div className="prose">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
