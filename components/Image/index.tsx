import { FC, ReactElement } from "react";
import Image from "next/image";
import Gambar from "@/assets/wellcome.png";

const Landing: FC = (): ReactElement => {
  return (
    <>
      <Image width={500} height={500} src={Gambar} alt="hallo" />
    </>
  );
};
export default Landing;
