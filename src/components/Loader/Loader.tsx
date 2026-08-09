import { loaderStyles as styles } from "./Loader.styles";
import { LoaderProps } from "./Loader.types";

export const Loader = ({ label = "Loading…" }: LoaderProps) => {
  return (
    <div className={styles.container} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden />
      <span>{label}</span>
    </div>
  );
};

Loader.displayName = "Loader";
