import {
  ApartmentOutlined,
  GlobalOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useGeneralContext } from "../../contexts/GeneralContext";
import { ActiveLink } from "../basicComponents";

export function NavBar() {
  const { selectedAssetId } = useGeneralContext();

  return (
    <nav className="flex flex-row items-center justify-between max-w-[600px] mx-auto px-8 h-16 max-[910px]:max-w-full max-[910px]:px-6 max-[768px]:h-12 max-[768px]:px-4">
      <ActiveLink to="/assets">
        <ProjectOutlined className="text-[24px] max-[910px]:text-[20px] max-[488px]:text-[18px] max-[425px]:hidden" />
        Assets
      </ActiveLink>
      <ActiveLink to={`/asset/${selectedAssetId}`}>
        <GlobalOutlined className="text-[24px] max-[910px]:text-[20px] max-[488px]:text-[18px] max-[425px]:hidden" />
        Status
      </ActiveLink>
      <ActiveLink to="/users">
        <UserOutlined className="text-[24px] max-[910px]:text-[20px] max-[488px]:text-[18px] max-[425px]:hidden" />
        Users
      </ActiveLink>
      <ActiveLink to="/workorders">
        <ApartmentOutlined className="text-[24px] max-[910px]:text-[20px] max-[488px]:text-[18px] max-[425px]:hidden" />
        Work Orders
      </ActiveLink>
    </nav>
  );
}
