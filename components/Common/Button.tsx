import type { FC, ReactElement } from "react";
import Link from "next/link";
import type { ButtonProps } from "@/utilities/interfaces/index";

const Button: FC<ButtonProps> = ({ text, className, page }): ReactElement => {
  return (
    <Link href={`${page}`}>
      <button className={className}>{text}</button>
    </Link>
  );
};

export default Button;
