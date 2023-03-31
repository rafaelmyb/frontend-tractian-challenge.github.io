import { Divider } from "antd";
import { ReactNode } from "react";
import { NavBar } from "../components/extendedComponents";
import { Header } from "./Header";


type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <section>
      <Header />
      <NavBar />
      <Divider type="horizontal" className="my-0 border" />

      <div className="pt-6 px-6 pb-6 h-full max-[910px]:pt-4 max-[768px]:px-4">{children}</div>
    </section>
  );
}
