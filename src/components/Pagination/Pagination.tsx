import { Button } from '@/components/Button';
import { paginationStyles as styles } from './Pagination.styles';
import { PaginationProps } from './Pagination.types';

export const Pagination = ({ page, hasNext, hasPrevious, onPageChange }: PaginationProps) => {
  return (
    <div className={styles.container}>
      <Button
        className={styles.navButton}
        onClick={() => onPageChange(page - 1)}
        disabled={!hasPrevious}
      >
        Previous
      </Button>
      <span className={styles.pageBadge}>{page}</span>
      <Button
        className={styles.navButton}
        onClick={() => onPageChange(page + 1)}
        disabled={!hasNext}
      >
        Next
      </Button>
    </div>
  );
};

Pagination.displayName = 'Pagination';
