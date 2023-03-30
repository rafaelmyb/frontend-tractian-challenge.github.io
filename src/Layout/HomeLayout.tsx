import { ReactNode } from "react";

type HomeLayoutProps = {
  children: ReactNode;
};

export function HomeLayout({ children }: HomeLayoutProps) {
  return <section>{children}</section>;
}
