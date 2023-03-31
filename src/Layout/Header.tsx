import { Button, Dropdown, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <header className="flex flex-row items-center bg-blue-600 h-14 px-6 max-[768px]:px-4 max-[768px]:justify-between">
      <h1 className="text-white font-extrabold text-4xl max-[425px]:text-3xl">
        TRACTIAN
      </h1>
      {!isLoading && (
        <Dropdown
          menu={{
            items,
            selectable: true,
            onSelect: (e) => setSelectedUnit(Number(e.key)),
            defaultSelectedKeys: ["1"],
          }}
          className="ml-8"
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
      <Button
        type="default"
        ghost
        className="text-white ml-auto"
        onClick={() => navigate("/")}
      >
        Sair
      </Button>
    </header>
  );
}
