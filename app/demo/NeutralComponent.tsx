import { PropsWithChildren } from 'react';

export const NeutralComponent = (props: PropsWithChildren) => {
  console.log('Neutral Component');
  return (
    <div className=" p-4 border-4 border-dashed border-gray-500 bg-gray-500/50 rounded">
      <div>Neutral component</div>
      {props.children}
    </div>
  );
};
