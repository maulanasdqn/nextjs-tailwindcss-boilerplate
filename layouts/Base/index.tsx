import { FC, Fragment, ReactElement, ReactNode } from "react";
import { BaseLayoutType } from "./types";

const BaseLayouts: FC<BaseLayoutType> = ({ children }): ReactElement => {
  return (
    <section className="flex flex-col h-screen justify-center items-center w-screen">
      {children}
    </section>
  );
};

export default BaseLayouts;
