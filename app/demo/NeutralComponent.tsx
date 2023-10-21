import { PropsWithChildren } from 'react';

export const NeutralComponent = (props: PropsWithChildren) => {
  const isClientComponent = typeof window !== 'undefined';
  return (
    <div className="p-4 flex flex-col gap-2 border-4 border-dashed border-gray-500 bg-gray-100 rounded">
      <div>
        Neutral component{' '}
        <span className="italic text-sm">
          (current : {isClientComponent ? 'Client' : 'Server'})
        </span>
      </div>

      {props.children}
    </div>
  );
};
