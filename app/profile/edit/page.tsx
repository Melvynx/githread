import notFound from '@/app/users/[userId]/not-found';
import { getAuthSession } from '@/src/auth/nextauth-option';
import { getUserEdit } from '@/src/db/query/user.query';
import { ProfileForm } from './ProfileForm';
import { editProfile } from './edit-profile.action';

export default async function EditUser() {
  const session = await getAuthSession();

  const userId = session?.user.id;
  if (!userId) {
    notFound();
    return;
  }

  const user = await getUserEdit(userId);

  if (!user) {
    notFound();
    return;
  }

  return (
    <div className="h-full container flex items-center">
      <div className="bg-card border rounded-md border-border p-4 flex-1">
        <ProfileForm user={user} onSubmit={editProfile} />
      </div>
    </div>
  );
}
