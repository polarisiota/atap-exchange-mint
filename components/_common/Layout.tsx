import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Atap Exchange</title>
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.ico" />
        <meta name="description" content="Atap Exchange" />
      </Head>
      <Header />
      <main className="overflow-hidden w-full bg-black-pearl pt-[7.75rem] relative px-[5%] md:px-[10%]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
