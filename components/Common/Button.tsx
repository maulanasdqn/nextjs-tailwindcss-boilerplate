import type { FC, ReactElement } from "react";
import Link from "next/link";
import type { ButtonProps } from "@/utilities/interfaces/index";

const Button: FC<ButtonProps> = ({ text, className, page }): ReactElement => {
  return (
    <Link href={`${page}`}>
      <button className={className}>
        <h1>{text}</h1>
      </button>
    </Link>
  );
};

export default Button;
