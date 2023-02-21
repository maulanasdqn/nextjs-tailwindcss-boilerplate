import { FC, ReactElement } from "react";
import { AuthLayoutTypes } from "./types";
import Image from "next/image";

const AuthLayouts: FC<AuthLayoutTypes> = ({ title, children }): ReactElement => {
  return (
    <section className="bg-auth bg-cover bg-center h-screen justify-center flex flex-col w-full">
      <div className="flex flex-col w-full items-start justify-center md:pl-[400px] py-8 px-6 md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
            <div className="flex w-full items-center justify-center">
              <Image width={80} height={80} src="/logo.png" alt="logo" />
            </div>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-900 bg-white dark:text-white dark:bg-gray-900">
                {title}
              </span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayouts;
