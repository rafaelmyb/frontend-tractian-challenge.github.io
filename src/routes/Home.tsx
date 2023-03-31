import { Card, Divider, Dropdown, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import { Logo } from "../components/basicComponents";
import { useGeneralContext } from "../contexts";
import { useCompanies } from "../hooks/useReactQuery";

type CompaniesProps = {
  id: number;
  name: string;
};

export function Home() {
  const navigate = useNavigate();
  const { selectedCompanyId, setSelectedCompanyId } = useGeneralContext();
  const { companies, isLoading } = useCompanies();

  const items = companies?.map((unit: CompaniesProps) => ({
    key: unit.id,
    label: unit.name,
  }));

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <Card className="max-w-[450px] w-full shadow-md">
        <div className="flex flex-col w-full">
          <Logo color="#1D4ED8" className="w-[177px] h-[40px]" />

          <span className="flex mt-4 italic text-base">
            “Make the Maintenance Manager's life easier”
          </span>

          <Divider type="horizontal" className="my-4 border" />

          <span className="text-sm">Select your company</span>

          {!isLoading && (
            <Dropdown
              menu={{
                items,
                selectable: true,
                onSelect: (e) => {
                  setSelectedCompanyId(Number(e.key));
                  navigate("/dashboard");
                },
              }}
              placement="bottomLeft"
              className="ml-0"
            >
              <Typography.Link className="ml-0 mt-2">
                <div className="flex flex-row items-center text-sm font-medium">
                  {
                    // @ts-ignore
                    items[selectedCompanyId - 1].label
                  }
                </div>
              </Typography.Link>
            </Dropdown>
          )}
        </div>
      </Card>
    </div>
  );
}
