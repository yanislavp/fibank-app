import { Form } from "radix-ui";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";
import { useLoginForm } from "@/hooks/useLoginForm";
import { loginFormStyles as styles } from "./LoginForm.styles";

export const LoginForm = () => {
  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useLoginForm();

  return (
    <Form.Root onSubmit={handleSubmit} className={styles.form} noValidate>
      <TextField
        name="username"
        label="Username"
        autoComplete="username"
        value={values.username}
        onChange={handleChange("username")}
        onBlur={handleBlur("username")}
        error={touched.username ? errors.username : null}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={values.password}
        onChange={handleChange("password")}
        onBlur={handleBlur("password")}
        error={touched.password ? errors.password : null}
      />
      <Form.Submit asChild>
        <Button type="submit" disabled={!isValid} className={styles.submit}>
          Log in
        </Button>
      </Form.Submit>
    </Form.Root>
  );
};

LoginForm.displayName = "LoginForm";
