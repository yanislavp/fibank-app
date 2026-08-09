import type { InputHTMLAttributes, Ref } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string | null;
  ref?: Ref<HTMLInputElement>;
}
