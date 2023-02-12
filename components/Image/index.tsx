import { FC, ReactElement } from "react";
import Image from "next/image";
import Gambar from "@/assets/hallo.png";

const Landing: FC = (): ReactElement => {
  return (
    <>
      <Image width={200} height={200} src={Gambar} alt="hallo" />
    </>
  );
};
export default Landing;
