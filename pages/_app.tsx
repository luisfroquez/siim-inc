import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import AllToaster from "../src/components/AllToaser";
import store from "../src/redux/store";
import "../style/main.css";
import darkModeDetector from "../src/utils/darkModeDetector";

const queryClient = new QueryClient();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  const isDarkMode = darkModeDetector();

  const favicon = isDarkMode
    ? "/img/favicons/Light.svg"
    : "/img/favicons/Dark.svg";

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Head>
          <title>Grupo SIIM</title>
          <meta
            name="description"
            content="Distribuidora de Materiales y Equipos en las áreas de Detección y Extinción de Incendios, Seguridad Electrónica, Ferretería, Electricidad"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="site.webmanifest" />
          <link rel="shortcut icon" type="image/x-icon" href={favicon} />
        </Head>
        <AllToaster />

        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
