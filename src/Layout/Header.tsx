// @ts-nocheck
import { Dropdown, Typography } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { Logo } from "../components/basicComponents";
import { useUnits } from "../hooks/useReactQuery";
import { useGeneralContext } from "../contexts";

type UnitProps = {
  companyId: number;
  id: number;
  name: string;
};

export function Header() {
  const { selectedUnit, setSelectedUnit, selectedCompanyId } =
    useGeneralContext();
  const { units, isLoading } = useUnits();

  const selectedCompanyUnits =
    !isLoading &&
    units.filter((unit: UnitProps) => unit.companyId === selectedCompanyId);

  const items =
    selectedCompanyUnits &&
    selectedCompanyUnits.map((unit: UnitProps) => ({
      key: unit.id,
      label: unit.name,
    }));

  const menuItems = [
    {
      key: 1,
      label: "Dashboard",
    },
    {
      key: 2,
      label: "Log out",
    },
  ];

  const navigate = useNavigate();

  function handleRedirect(e) {
    switch (e) {
      case 1:
        return navigate("/dashboard");
      case 2:
        return navigate("/");
      default:
        return navigate("/");
    }
  }

  return (
    <header className="flex flex-row items-center bg-blue-600 h-14 px-6 max-[768px]:px-4 max-[768px]:justify-between">
      <Logo
        color="#fff"
        className="w-[177px] h-[40px] max-[425px]:w-[147px] max-[425px]:h-[36px]"
      />
      {!isLoading && (
        <Dropdown
          menu={{
            items,
            selectable: true,
            onSelect: (e) => setSelectedUnit(Number(e.key)),
            defaultSelectedKeys: ["1"],
          }}
          className="ml-8 max-[375px]:ml-4"
        >
          <Typography.Link>
            <div className="flex flex-row items-center text-sm font-medium">
              <>
                {items[selectedUnit - 1].label}
                <DownOutlined className="text-xs font-bold mt-[-4px] ml-2" />
              </>
            </div>
          </Typography.Link>
        </Dropdown>
      )}

      <Dropdown
        menu={{
          items: menuItems,
          selectable: true,
          onSelect: (e) => handleRedirect(Number(e.key)),
          defaultSelectedKeys: ["0"],
        }}
        className="ml-auto"
      >
        <div className="flex flex-row items-center text-sm font-medium">
          <MenuOutlined className="text-lg mt-[-4px] text-white" />
        </div>
      </Dropdown>
    </header>
  );
}
