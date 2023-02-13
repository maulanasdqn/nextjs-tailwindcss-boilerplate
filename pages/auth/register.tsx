import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import { NextPage } from "next";
import { ReactElement } from "react";
import Link from "next/link";
import Button from "@/components/Common/Button";

const Register: NextPage = (): ReactElement => {
  return (
    <AuthLayouts title="Create your Account">
      <form className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
            Your email
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
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            Confirm Password
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

        <div className="flex justify-center">
          <Button
            page={`/`}
            className="my-4 bg-blue-400 text-white font-bold px-20 py-1 rounded-md text-white"
            text="Register"
            type={"button"}
          />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Back to <Link href="/">Home Page</Link>
        </p>
      </form>
    </AuthLayouts>
  );
};

export default Register;
