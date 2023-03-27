import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Layout({children}: Props) {
  return (
    <div>
      <h1>Hi</h1>
      {children}
    </div>
  );
}