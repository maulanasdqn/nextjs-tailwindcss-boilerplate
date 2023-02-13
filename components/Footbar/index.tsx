import { FC, ReactElement } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import Link from "next/link";

const Footbar: FC = (): ReactElement => {
  return (
    <footer className="flex justify-between md:hidden gap-6 items-center bg-blue-600 h-10 w-screen fixed inset-x-0 bottom-0 p-8">
      <Link href="/">
        <div className="text-white text-4xl">
          <AiFillHome />
        </div>
      </Link>
      <Link href="/course">
        <div className="text-white text-4xl">
          <AiOutlineProfile />
        </div>
      </Link>
      <Link href={"/price"}>
        <div className="text-white text-4xl">
          <AiOutlineContacts />
        </div>
      </Link>
    </footer>
  );
};
export default Footbar;
