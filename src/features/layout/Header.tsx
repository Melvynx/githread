import { getAuthSession } from '@/src/auth/nextauth-option';
import { ThemeToggle } from '@/src/theme/ThemeToggle';
import Link from 'next/link';
import { LoginButton } from '../auth/LoginButton';
import { UserProfile } from '../auth/UserProfile';

export const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className="border-b border-b-accent fixed top-0 left-0 right-0 bg-background">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <Link href="/" className="text-2xl font-bold mr-auto">
          RSC
        </Link>
        <ThemeToggle />
        {session?.user.id ? <UserProfile /> : <LoginButton />}
      </div>
    </header>
  );
};
