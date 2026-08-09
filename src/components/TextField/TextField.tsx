import { Form } from 'radix-ui';
import { cn } from 'tailwind-variants';
import { textFieldStyles as styles } from './TextField.styles';
import type { TextFieldProps } from './TextField.types';

export const TextField = ({
  name,
  label,
  error,
  className,
  ref,
  ...rest
}: TextFieldProps) => {
  return (
    <Form.Field name={name} className={styles.field}>
      <Form.Label className={styles.label}>{label}</Form.Label>
      <Form.Control asChild>
        <input
          ref={ref}
          className={cn(styles.input, error && styles.inputError, className)}
          {...rest}
        />
      </Form.Control>
      {error && (
        <Form.Message forceMatch className={styles.message}>
          {error}
        </Form.Message>
      )}
    </Form.Field>
  );
};

TextField.displayName = 'TextField';
