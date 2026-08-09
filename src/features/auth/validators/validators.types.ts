import { FieldError } from "./validators";

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface LoginFormErrors {
  username: FieldError;
  password: FieldError;
}
