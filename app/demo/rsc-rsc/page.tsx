import { ServerComponentWithChild } from './ServerComponentWithChild';

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">RSC with RSC child</h1>
      <ServerComponentWithChild />
    </div>
  );
}
