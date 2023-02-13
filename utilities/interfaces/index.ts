import type { ButtonHTMLAttributes } from "react";
import { Url } from "url";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  text: string | number;
  className?: string;
  to?: string;
  page?: string;
  target?: string;
}
