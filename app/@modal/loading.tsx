import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Loader } from '@/components/ui/loader';

export default function loader() {
  return (
    <Dialog>
      <DialogContent>
        <Loader />
      </DialogContent>
    </Dialog>
  );
}
