import { LoginForm } from '@/features/auth/LoginForm/LoginForm';
import { loginViewStyles as styles } from './LoginViewstyles';
import fibankLogo from '@/assets/fibank_logo.svg';

export const LoginView = () => {
  return (
    <main className={styles.view}>
      <div className={styles.card}>
        <div className={styles.logoWrap}>
          <img className={styles.logoImage} src={fibankLogo} alt="Fibank logo" />
        </div>
        <h1 className={styles.title}>Fibank</h1>
        <p className={styles.subtitle}>Sign in to view the people directory</p>
        <LoginForm />
      </div>
    </main>
  );
};

LoginView.displayName = 'LoginView';
