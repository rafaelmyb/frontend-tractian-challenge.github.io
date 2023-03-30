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
  filteredOrders: any;
  setFilteredOrders: Dispatch<SetStateAction<any>>;
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
  const [filteredOrders, setFilteredOrders] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleRedirect() {
    if (oldUnit !== selectedUnit) {
      setOldUnit(selectedUnit);
      return navigate("/");
    }
  }

  useEffect(() => {
    if (pathname !== "/") {
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
        setFilteredOrders
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export const useGeneralContext = () => useContext(GeneralContext);
