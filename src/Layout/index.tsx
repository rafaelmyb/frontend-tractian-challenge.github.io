import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { HomeLayout } from "./HomeLayout";
import { MainLayout } from "./MainLayout";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  const { pathname } = useLocation();

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
