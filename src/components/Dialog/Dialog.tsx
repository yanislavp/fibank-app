import { Dialog as RadixDialog } from "radix-ui";
import { cn } from "tailwind-variants";
import { dialogStyles as styles } from "./Dialog.styles";
import type { DialogContentProps } from "./Dialog.types";

export const DialogContent = ({
  className,
  children,
  ...props
}: DialogContentProps) => {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={styles.overlay} />
      <RadixDialog.Content className={cn(styles.content, className)} {...props}>
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
};

DialogContent.displayName = "DialogContent";

export const Dialog = (
  props: React.ComponentProps<typeof RadixDialog.Root>,
) => <RadixDialog.Root {...props} />;

Dialog.displayName = "Dialog";

export const DialogTitle = (
  props: React.ComponentProps<typeof RadixDialog.Title>,
) => <RadixDialog.Title {...props} />;

DialogTitle.displayName = "DialogTitle";

export const DialogDescription = (
  props: React.ComponentProps<typeof RadixDialog.Description>,
) => <RadixDialog.Description {...props} />;

DialogDescription.displayName = "DialogDescription";
