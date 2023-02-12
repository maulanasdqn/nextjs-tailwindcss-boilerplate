import type { NextPage } from "next";
import BaseLayout from "@/layouts/Base/BaseLayouts";
import { ReactElement } from "react";
import Landing from "@/components/Image";
import Button from "../components/Common/Button";

const Index: NextPage = (): ReactElement => {
  return (
    <>
      <BaseLayout>
        <Landing />
        <div className="flex gap-4">
          <Button
            className="bg-blue-600 px-6 py-2 rounded-md text-white"
            text="Login"
            type={"button"}
          />
          <Button
            className="bg-blue-600 px-4 py-2 rounded-md text-white"
            text="Register"
            type={"button"}
          />
        </div>
      </BaseLayout>
    </>
  );
};

export default Index;
