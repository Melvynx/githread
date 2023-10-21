'use client';

import { PropsWithChildren, useState } from 'react';

export const ClientComponent = (props: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 flex flex-col gap-2 border-4 border-dashed border-purple-500 bg-purple-100 rounded">
      <div>
        Client component{' '}
        <span className="font-bold" onClick={() => setCount((prev) => prev + 1)}>
          ⍛ {count} ⍛
        </span>
      </div>
      {props.children}
    </div>
  );
};
