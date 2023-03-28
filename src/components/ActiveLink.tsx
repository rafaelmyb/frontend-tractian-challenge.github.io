
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom"

type Props = {
  children: ReactNode;
  to: string;
}

export function ActiveLink({ children, to, ...rest }: Props) {
  const { pathname } = useLocation();

  const className = pathname === to ? "text-blue-500" : "text-black"
  
  const basicStyle = `flex flex-row items-center gap-2 text-lg font-medium ${className}`

  return (
    <Link className={basicStyle} to={to} {...rest}>
      {children}
    </Link>
  );
}