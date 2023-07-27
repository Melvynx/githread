import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { buttonVariants } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function notFound() {
  return (
    <div className="my-8">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>404 - User not found</AlertTitle>
        <AlertDescription>
          The user you are looking for does not exist. Please check the URL and try
          again.
        </AlertDescription>
        <Link
          href="/"
          className={buttonVariants({
            variant: 'link',
          })}
        >
          Back to home page
        </Link>
      </Alert>
    </div>
  );
}
