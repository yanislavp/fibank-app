import { Dialog as RadixDialog } from 'radix-ui';
import { cn } from 'tailwind-variants';
import { dialogStyles as styles } from './Dialog.styles';
import type { DialogContentProps } from './Dialog.types';

export const DialogContent = ({ className, children, ...rest }: DialogContentProps) => {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={styles.overlay} />
      <RadixDialog.Content className={cn(styles.content, className)} {...rest}>
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
};

DialogContent.displayName = 'DialogContent';
