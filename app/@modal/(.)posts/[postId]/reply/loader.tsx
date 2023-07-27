import { Dialog } from '@/components/ui/dialog';
import { Loader } from '@/components/ui/loader';

export default function loader() {
  return (
    <Dialog open={true}>
      <Loader />
    </Dialog>
  );
}
