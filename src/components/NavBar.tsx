import { DashboardOutlined, ProjectOutlined } from "@ant-design/icons";
import { ActiveLink } from "./ActiveLink";

export function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between max-w-[600px] mx-auto px-8 h-16">
      <ActiveLink to="/">
        <ProjectOutlined style={{
            fontSize: 24,
          }} />
        Ativos
      </ActiveLink>
      <ActiveLink to="/asset/2">
        <DashboardOutlined
          style={{
            fontSize: 24,
          }}
        />
        Status
      </ActiveLink>
      <ActiveLink to="/users">Usuários</ActiveLink>
    </nav>
  );
}
