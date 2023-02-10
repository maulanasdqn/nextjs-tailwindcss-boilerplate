import ApiService from "@/services/Api";
import { AuthenticatedStatus } from "@/stores/Auth";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useRecoilValue } from "recoil";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const isAuth = useRecoilValue(AuthenticatedStatus);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (isAuth) {
        ApiService.setHeader();
        ApiService.mount401Interceptor();
      } else {
        ApiService.removeHeader();
        ApiService.unmount401Interceptor();
        router.push("/");
      }
    }
  }, [router, isAuth]);

  return <>{isAuth ? children : null}</>;
};

export default ProtectedRoutes;
