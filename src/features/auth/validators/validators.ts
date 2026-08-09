import { LoginFormValues, LoginFormErrors } from "./validators.types";

export const CREDENTIAL_MIN_LENGTH = 4;
export const CREDENTIAL_MAX_LENGTH = 30;

export type FieldError = string | null;

export const validateCredentialField = (value: string): FieldError => {
  const trimmed = value.trim();

  if (trimmed.length === 0) {
    return 'This field is required.';
  }
  if (trimmed.length < CREDENTIAL_MIN_LENGTH) {
    return `Must be at least ${CREDENTIAL_MIN_LENGTH} characters.`;
  }
  if (trimmed.length > CREDENTIAL_MAX_LENGTH) {
    return `Must be at most ${CREDENTIAL_MAX_LENGTH} characters.`;
  }
  return null;
};

export const validateLoginForm = (values: LoginFormValues): LoginFormErrors => {
  return {
    username: validateCredentialField(values.username),
    password: validateCredentialField(values.password),
  };
};

export const isLoginFormValid = (errors: LoginFormErrors): boolean => {
  return errors.username === null && errors.password === null;
};
