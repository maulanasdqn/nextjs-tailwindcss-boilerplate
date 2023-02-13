import { FC, ReactElement } from "react";
import BaseLayouts from "@/layouts/Base/BaseLayouts";
import Image from "next/image";
import Gambar from "@/assets/wellcome.png";
import Button from "@/components/Common/Button";

const Landing: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Image width={500} height={500} src={Gambar} alt="hallo" />
      <div className="flex gap-6 md:gap-4">
        <Button
          page={`/auth/login`}
          className="bg-blue-600 px-6 py-2 rounded-md text-white"
          text="Login"
          type={"button"}
        />

        <Button
          page={`/auth/register`}
          className="bg-blue-600 px-4 py-2 rounded-md text-white"
          text="Register"
          type={"button"}
        />
      </div>
    </BaseLayouts>
  );
};

export default Landing;
