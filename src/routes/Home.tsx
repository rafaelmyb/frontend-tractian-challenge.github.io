import { Card, Divider, Dropdown, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useGeneralContext } from "../contexts";
import { useCompanies } from "../hooks/useReactQuery";

type CompaniesProps = {
  id: number;
  name: string;
};

export function Home() {
  const { selectedCompanyId, setSelectedCompanyId } = useGeneralContext();
  const { companies, isLoading } = useCompanies();

  const items =
    !isLoading &&
    companies.map((unit: CompaniesProps) => ({
      key: unit.id,
      label: unit.name,
    }));

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="max-w-[450px] w-full shadow-md">
        <div className="flex flex-col w-full">
          <h1 className="text-blue-500 font-extrabold text-4xl max-[425px]:text-3xl">
            TRACTIAN
          </h1>

          <span className="flex mt-4 italic text-base">
            “Para facilitar a vida do Gestor de Manutenção”
          </span>

          <Divider type="horizontal" className="my-4 border" />

          <span className="text-sm">Selecione sua companhia</span>

          {!isLoading && (
            <Dropdown
              menu={{
                items,
                selectable: true,
                onSelect: (e) => {
                  setSelectedCompanyId(Number(e.key));
                  navigate("/ativos");
                },
              }}
              placement="bottomLeft"
              className="ml-8"
            >
              <Typography.Link className="ml-0 mt-2">
                <div className="flex flex-row items-center text-sm font-medium">
                  {items[selectedCompanyId - 1].label}
                </div>
              </Typography.Link>
            </Dropdown>
          )}
        </div>
      </Card>
    </div>
  );
}
