import type { NextPage } from "next";
import BaseLayout from "@/layouts/Base/BaseLayouts";
import { ReactElement } from "react";
import Landing from "@/components/Image";

const Index: NextPage = (): ReactElement => {
  return (
    <>
      <BaseLayout>
        <Landing />
      </BaseLayout>
    </>
  );
};

export default Index;
