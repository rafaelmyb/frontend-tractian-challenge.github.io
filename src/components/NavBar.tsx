import {
  ApartmentOutlined,
  GlobalOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ActiveLink } from "./ActiveLink";

export function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between max-w-[600px] mx-auto px-8 h-16 max-[910px]:max-w-full max-[910px]:px-0">
      <ActiveLink to="/">
        <ProjectOutlined className="text-[24px] max-[910px]:text-[20px] max-[488px]:text-[18px] max-[425px]:hidden" />
        Ativos
      </ActiveLink>
      <ActiveLink to="/asset/2">
        <GlobalOutlined className="text-[24px] max-[910px]:text-[20px] max-[488px]:text-[18px] max-[425px]:hidden" />
        Status
      </ActiveLink>
      <ActiveLink to="/users">
        <UserOutlined className="text-[24px] max-[910px]:text-[20px] max-[488px]:text-[18px] max-[425px]:hidden" />
        Usuários
      </ActiveLink>
      <ActiveLink to="/workorders">
        <ApartmentOutlined className="text-[24px] max-[910px]:text-[20px] max-[488px]:text-[18px] max-[425px]:hidden" />
        Ordens de serviço
      </ActiveLink>
    </nav>
  );
}
