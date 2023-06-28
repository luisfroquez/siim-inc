import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import DLayout from "../src/components/layout/dLayout";
import { H1 } from "../src/components/ui/headings";

const Page: NextPageWithLayout = () => {
  return <H1>Distribuidora</H1>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DLayout>{page}</DLayout>;
};

export default Page;
