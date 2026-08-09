import { useMemo, useState, type ChangeEvent, type SubmitEvent } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import {
  isLoginFormValid,
  validateLoginForm,
} from "../features/auth/validators/validators";
import { LoginFormValues } from "@/features/auth/validators/validators.types";

const INITIAL_VALUES: LoginFormValues = { username: "", password: "" };

export const useLoginForm = () => {
  const [values, setValues] = useState<LoginFormValues>(INITIAL_VALUES);
  const [touched, setTouched] = useState<
    Record<keyof LoginFormValues, boolean>
  >({
    username: false,
    password: false,
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const errors = useMemo(() => validateLoginForm(values), [values]);
  const isValid = useMemo(() => isLoginFormValid(errors), [errors]);

  const handleChange =
    (field: keyof LoginFormValues) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setValues((prev) => ({ ...prev, [field]: value }));
      setTouched((prev) => (prev[field] ? prev : { ...prev, [field]: true }));
    };

  const handleBlur = (field: keyof LoginFormValues) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ username: true, password: true });

    if (!isValid) {
      return;
    }

    login(values.username.trim());
    navigate("/table");
  };

  return {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
