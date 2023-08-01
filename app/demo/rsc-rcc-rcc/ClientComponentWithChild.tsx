'use client';

import { PropsWithChildren, useState } from 'react';
import { NeutralComponent } from '../NeutralComponent';

export const ClientComponentWithChild = (props: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  return (
    <div className=" p-4 border-4 border-dashed border-purple-500 bg-purple-500/50 rounded">
      <div>
        Client component{' '}
        <span className="font-bold" onClick={() => setCount((prev) => prev + 1)}>
          ⍛ {count} ⍛
        </span>
      </div>
      <NeutralComponent />
    </div>
  );
};