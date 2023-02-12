import { FC, ReactElement } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { ImPriceTag } from "react-icons/im";
import { BsServer } from "react-icons/bs";

const Footbar: FC = (): ReactElement => {
  return (
    <>
      <footer className="flex justify-between md:hidden gap-6 items-center bg-blue-600 h-10 w-screen fixed inset-x-0 bottom-0 p-8">
        <div className="text-white text-4xl">
          <AiFillHome />
        </div>
        <div className="text-white text-4xl">
          <AiOutlineProfile />
        </div>
        <div className="text-white text-4xl">
          <BsServer />
        </div>
        <div className="text-white text-4xl">
          <ImPriceTag />
        </div>
        <div className="text-white text-4xl">
          <AiOutlineContacts />
        </div>
      </footer>
    </>
  );
};
export default Footbar;
