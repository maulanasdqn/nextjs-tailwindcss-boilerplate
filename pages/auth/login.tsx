import AuthLayouts from "@/layouts/Auth/AuthLayouts";
import { NextPage } from "next";
import { ReactElement } from "react";
import Link from "next/link";
import Button from "@/components/Common/Button";

const Login: NextPage = (): ReactElement => {
  return (
    <AuthLayouts title="Sign to your Account">
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
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
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
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                Remember me
              </label>
            </div>
          </div>
          <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">
            Forgot password?
          </a>
        </div>
        <div className="flex justify-center">
          <Button
            page={`/`}
            className="my-4 border-2 border-blue-400 text-blue-400 font-bold px-20 py-1 rounded-md text-white"
            text="Login"
            type={"button"}
          />
        </div>

        <p className="text-sm font-light text-gray-500 ">
          Don’t have an account yet?{" "}
          <Link href="/auth/register" className="font-medium text-primary-600 hover:underline ">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayouts>
  );
};

export default Login;
