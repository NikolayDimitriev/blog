import { FC } from "react";
import { LayoutProps } from "./LayoutProps";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
