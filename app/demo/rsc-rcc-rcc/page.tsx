import { ClientComponentWithChild } from './ClientComponentWithChild';

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">RCC with RCC child</h1>
      <ClientComponentWithChild />
    </div>
  );
}
