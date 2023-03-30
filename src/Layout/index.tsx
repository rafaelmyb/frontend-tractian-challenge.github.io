import { ReactNode } from "react";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <main className="h-full">
      <Header />
      <div className="px-6 pb-6 h-full max-[768px]:px-4">{children}</div>
    </main>
  );
}
