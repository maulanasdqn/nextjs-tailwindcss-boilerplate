import AuthLayouts from "@/layouts/Auth";
import { NextPage } from "next";
import { ReactElement } from "react";
import Button from "@/components/Common/Button";

const Login: NextPage = (): ReactElement => {
  return (
    <AuthLayouts title="Halaman Login">
      <form className="space-y-4 md:space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-base font-bold font-sans text-gray-900 "
          >
            Phone Number
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-base font-bold font-sans text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            required
          />
        </div>
        <div className="flex w-full gap-x-4 justify-center">
          <Button
            page={`/auth/register`}
            className="my-4 border-2 w-auto h-auto border-red-600 text-red-600 font-bold py-3 px-20 rounded-md"
            text="Daftar"
            type={"button"}
          />
          <Button
            page={`/`}
            className="my-4 border-2 border-transparent bg-red-600 text-white font-bold px-20 py-3 rounded-md"
            text="Masuk"
            type={"button"}
          />
        </div>
      </form>
    </AuthLayouts>
  );
};

export default Login;
