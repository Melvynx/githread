import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function page() {
  return (
    <div className="mt-8 flex flex-wrap gap-4 items-start">
      <Link className={buttonVariants({ size: 'sm' })} href="/demo/rsc">
        demo/rsc
      </Link>
      <Link className={buttonVariants({ size: 'sm' })} href="/demo/rcc">
        demo/rcc
      </Link>

      <Link className={buttonVariants({ size: 'sm' })} href="/demo/bdd">
        demo/bdd
      </Link>

      <Link className={buttonVariants({ size: 'sm' })} href="/demo/bdd-client">
        demo/bdd-client
      </Link>

      <Link className={buttonVariants({ size: 'sm' })} href="/demo/rsc-rcc-rcc">
        demo/rsc-rcc-rcc
      </Link>
      <Link className={buttonVariants({ size: 'sm' })} href="/demo/rsc-rsc">
        demo/rsc-rsc
      </Link>
      <Link className={buttonVariants({ size: 'sm' })} href="/demo/rsc-rcc-rsc">
        demo/rsc-rcc-rsc
      </Link>
      <Link className={buttonVariants({ size: 'sm' })} href="/demo/streaming">
        demo/streaming
      </Link>
    </div>
  );
}
