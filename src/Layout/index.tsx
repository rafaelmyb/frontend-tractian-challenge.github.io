import { ReactNode } from "react";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <main>
      <Header />
      <div className="px-6 pb-6 max-[768px]:px-4">{children}</div>
    </main>
  );
}
