import type { PropsWithChildren } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import TaskForm from './TaskForm';

const TaskFormDialog: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <TaskForm />
      </DialogContent>
    </Dialog>
  );
};

export default TaskFormDialog;
