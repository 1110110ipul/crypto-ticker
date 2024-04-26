import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "./AuthProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
          if (!user) {
              router.push("/login");
          }else{
            router.push("/register");
          }
      });
      return () => unsubscribe();
  }, []);

  return <Component {...pageProps} />;
}
