import { ClientNeutral } from './ClientNeutral';
import { ServerNeutral } from './ServerNeutral';

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">"Neutral Component"</h1>
      <ClientNeutral />
      <ServerNeutral />
    </div>
  );
}
