/* eslint-disable jsx-a11y/alt-text */
import { FC, ReactElement } from "react";
import Image from "next/image";
import DropdownMenu from "../Common/DropdownMenu";
import { Menu } from "@headlessui/react";
import { FiActivity } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import Link from "next/link";

const DROPDOWN_NAVBAR_MENU = [
  {
    text: "Anjay Mabar",
    icon: <FiActivity />,
  },
  {
    text: "Setting",
    icon: <AiFillSetting />,
  },
];

const NAVBAR_MENU = [
  {
    text: "Home",
    link: "/",
  },

  {
    text: "Course",
    link: "/course",
  },
  {
    text: "Price",
    link: "/price",
  },
];

const Navbar: FC = (): ReactElement => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="fixed container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
            width={40}
            height={40}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Course
          </span>
        </a>

        <div className="flex items-center md:order-2">
          <DropdownMenu list={DROPDOWN_NAVBAR_MENU}>
            <Menu.Button className="flex m-4 text-sm bg-gray-600 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:p-2">
              <span className="sr-only">Open user menu</span>
              <div className="text-3xl">
                <BiUserCircle />
              </div>
            </Menu.Button>
          </DropdownMenu>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {NAVBAR_MENU.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.link}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
