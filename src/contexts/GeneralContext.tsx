import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { WorkOrder } from "../types/commonTypes";

interface GeneralContextProps {
  selectedUnit: number;
  setSelectedUnit: Dispatch<SetStateAction<number>>;
  oldUnit: number;
  selectedAssetId: number;
  setSelectedAssetId: Dispatch<SetStateAction<number>>;
  selectedOrderId: number;
  setSelectedOrderId: Dispatch<SetStateAction<number>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  filteredOrders: WorkOrder[] | undefined;
  setFilteredOrders: Dispatch<SetStateAction<WorkOrder[] | undefined>>;
  selectedCompanyId: number;
  setSelectedCompanyId: Dispatch<SetStateAction<number>>;
  users: any[];
  setUsers: Dispatch<SetStateAction<never[]>>;
}

const GeneralContext = createContext({} as GeneralContextProps);

interface GeneralProviderProps {
  children: ReactNode;
}

export function GeneralProvider({ children }: GeneralProviderProps) {
  const [selectedUnit, setSelectedUnit] = useState<number>(1);
  const [oldUnit, setOldUnit] = useState<number>(1);
  const [selectedAssetId, setSelectedAssetId] = useState<number>(1);
  const [selectedOrderId, setSelectedOrderId] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState<WorkOrder[] | undefined>(
    []
  );
  const [selectedCompanyId, setSelectedCompanyId] = useState<number>(1);
  const [users, setUsers] = useState([]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleRedirect() {
    if (oldUnit !== selectedUnit) {
      setOldUnit(selectedUnit);
      return navigate("/dashboard");
    }
  }

  useEffect(() => {
    if (pathname !== "/dashboard") {
      handleRedirect();
    }
  }, [selectedUnit]);

  return (
    <GeneralContext.Provider
      value={{
        selectedUnit,
        setSelectedUnit,
        oldUnit,
        selectedAssetId,
        setSelectedAssetId,
        selectedOrderId,
        setSelectedOrderId,
        searchTerm,
        setSearchTerm,
        filteredOrders,
        setFilteredOrders,
        selectedCompanyId,
        setSelectedCompanyId,
        users,
        setUsers,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export const useGeneralContext = () => useContext(GeneralContext);
