import { Dialog as RadixDialog } from 'radix-ui';

// Unstyled Radix primitives re-exported under this folder's naming
// convention. Kept out of Dialog.tsx (which defines the actual
// <DialogContent /> component) so this file only holds simple aliases -
// mixing them with a real component export breaks Fast Refresh boundary
// detection (react-refresh/only-export-components).
export const DialogRoot = RadixDialog.Root;
export const DialogTitle = RadixDialog.Title;
export const DialogDescription = RadixDialog.Description;
