import { Link } from 'react-router';
import { notFoundViewStyles as styles } from './NotFoundView.styles';

export const NotFoundView = () => {
  return (
    <main className={styles.view}>
      <p className={styles.code}>404</p>
      <p className={styles.message}>Page not found.</p>
      <Link to="/login" className={styles.link}>
        Return to login
      </Link>
    </main>
  );
};

NotFoundView.displayName = 'NotFoundView';
