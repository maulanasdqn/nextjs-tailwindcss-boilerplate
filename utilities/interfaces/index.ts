import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  text: string | number;
  className?: string;
  to?: string;
  page?: string;
  target?: string;
}
