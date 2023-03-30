import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { HomeLayout } from "./HomeLayout";
import { MainLayout } from "./MainLayout";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  const { pathname } = useLocation();

  console.log(pathname)

  return (
    <main>
      {pathname === "/" ? (
        <HomeLayout>{children}</HomeLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </main>
  );
}
