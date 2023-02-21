import { FC, ReactElement } from "react";
import BaseLayouts from "@/layouts/Base";
import Button from "@/components/Common/Button";

const Landing: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <div className="flex gap-6 md:gap-4">
        <Button
          page={`/auth/login`}
          className="bg-blue-600 w-auto h-auto p-4 rounded-md text-white"
          text="Login"
          type={"button"}
        />

        <Button
          page={`/auth/register`}
          className="bg-blue-600 w-auto h-auto p-4 rounded-md text-white"
          text="Register"
          type={"button"}
        />
      </div>
    </BaseLayouts>
  );
};

export default Landing;
