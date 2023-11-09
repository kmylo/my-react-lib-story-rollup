import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import "./Button.css";

// import { cn } from "../../../lib/utils"

// const base = `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`
const base = ["in2-button", { fullWidth: "fullWidth" }];

const buttonVariants = cva(base, {
  variants: {
    state: {
      default: "default-state",
      disabled: "disabled",
      focus: "focus",
      hover: "hover",
      pressed: "pressed",
      loading: "loading",
    },
    variant: {
      default: "variant-default",
      outline: "border border-input in2-button--outline",
      primary: "bg-primary text-secondary-foreground in2-button--primary",
      secondary: "bg-secondary text-secondary-foreground in2-button--secondary",
    },
    size: {
      large: "in2-button-large-size",
      medium: "in2-button-medium-size",
      small: "in2-button-small-size",
    },
  },

  defaultVariants: {
    state: "default",
    variant: "default",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, state, variant, size, fullWidth, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        // className={cn(buttonVariants({ variant, size, className }))}
        className={buttonVariants({
          state,
          variant,
          size,
          // className,
          // fullWidth,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
