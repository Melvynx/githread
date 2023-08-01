import { ClientComponent } from '../ClientComponent';
import { ServerComponent } from '../ServerComponent';

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">RSC in RCC in RSC</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
