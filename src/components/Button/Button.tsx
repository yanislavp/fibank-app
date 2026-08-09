import { buttonVariants } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = ({ variant, className, ...props }: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant, className })} {...props} />
  );
};

Button.displayName = "Button";
