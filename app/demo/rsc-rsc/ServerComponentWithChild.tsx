import { PropsWithChildren } from 'react';
import { ServerComponent } from '../ServerComponent';

export const ServerComponentWithChild = (props: PropsWithChildren) => {
  return (
    <div className=" p-4 border-4 border-dashed border-blue-500 bg-blue-500/50 rounded">
      <div>Server component</div>
      <ServerComponent />
    </div>
  );
};
