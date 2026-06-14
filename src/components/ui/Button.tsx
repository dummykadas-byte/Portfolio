import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
      {
        "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg": variant === "dark",
        "bg-gradient-to-r from-brand-600 to-brand-500 text-white hover:from-brand-700 hover:to-brand-600 shadow-md hover:shadow-lg shadow-brand-500/20": variant === "primary",
        "border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 shadow-sm": variant === "outline",
        "hover:bg-slate-100 text-slate-700 hover:text-slate-900": variant === "ghost",
        "h-9 px-4 py-2": size === "sm",
        "h-11 px-6 py-2": size === "md",
        "h-14 px-8 text-base": size === "lg",
        "h-10 w-10": size === "icon",
      },
      className
    );

    if (href) {
      return (
        <a href={href} className={classes} {...(props as any)}>
          {props.children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props} />
    )
  }
)
Button.displayName = "Button"

export { Button }
