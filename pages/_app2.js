import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import AllToaster from "../src/components/AllToaser";
import PreLoader from "../src/layouts/PreLoader";
import ScrollTop from "../src/layouts/ScrollTop";
import store from "../src/redux/store";
import "../style/main.css";
import darkModeDetector from "../src/utils/darkModeDetector";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      store && setPreloader(false);
    }, 2000);

    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.WOW = require("wowjs");
      }
      new WOW.WOW().init();
    }, 2000);
  }, []);

  const isDarkMode = darkModeDetector();

  const favicon = isDarkMode
    ? "/img/favicons/Light.svg"
    : "/img/favicons/Dark.svg";

  console.log("isDarkMode", isDarkMode);

  return (
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
        {preloader ? <PreLoader /> : <ScrollTop />}
        <AllToaster />

        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
