import type { FC, ReactElement } from "react";
import type { ButtonProps } from "@/utilities/interfaces/index";

const Button: FC<ButtonProps> = ({ text, className }): ReactElement => {
  return (
    <button className={className}>
      <h1>{text}</h1>
    </button>
  );
};

export default Button;
