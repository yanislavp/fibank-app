import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm",
    "font-semiboldtransition-all duration-200 ",
    "disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer",
  ],
  variants: {
    variant: {
      primary:
        "bg-primary text-on-primary shadow-button hover:-translate-y-0.5 hover:bg-primary-hover active:translate-y-0 active:shadow-none",
      secondary:
        "border border-border bg-surface text-foreground hover:border-primary hover:text-primary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
