import { buttonVariants } from './Button.styles';
import type { ButtonProps } from './Button.types';

export const Button = ({ variant, className, ...rest }: ButtonProps) => {
  return <button className={buttonVariants({ variant, className })} {...rest} />;
};

Button.displayName = 'Button';
