import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import ApiService from "@/services/Api";
import ProtectedRoutes from "@/modules/Auth/ProtectedRoutes";
import configs from "@/configs";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

ApiService.init(configs.apiURL);
const publicRoutes = ["/", "/auth/login", "/auth/register"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {publicRoutes.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoutes>
            <Component {...pageProps} />
          </ProtectedRoutes>
        )}
      </RecoilRoot>
    </QueryClientProvider>
  );
}
