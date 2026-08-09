import { DialogRoot, DialogContent, DialogTitle, DialogDescription } from '@/components/Dialog';
import offlineIcon from '@/assets/offline.svg';
import { offlineDialogStyles as styles } from './OfflineDialog.styles';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

export const OfflineDialog = () => {
  const { isOffline } = useNetworkStatus();

  return (
    <DialogRoot open={isOffline}>
      <DialogContent
        onEscapeKeyDown={(event) => event.preventDefault()}
        onPointerDownOutside={(event) => event.preventDefault()}
        onInteractOutside={(event) => event.preventDefault()}
      >
        <div className={styles.iconWrap}>
          <img src={offlineIcon} alt="offline-icon" aria-hidden className={styles.icon} />
        </div>
        <DialogTitle className={styles.title}>You are offline</DialogTitle>
        <DialogDescription className={styles.description}>
          Check your connection - this will close automatically once you are back online.
        </DialogDescription>
      </DialogContent>
    </DialogRoot>
  );
};

OfflineDialog.displayName = 'OfflineDialog';
