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
}

const GeneralContext = createContext({} as GeneralContextProps);

interface GeneralProviderProps {
  children: ReactNode;
}

export function GeneralProvider({ children }: GeneralProviderProps) {
  const [selectedUnit, setSelectedUnit] = useState<number>(1);
  const [oldUnit, setOldUnit] = useState<number>(1);
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
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export const useGeneralContext = () => useContext(GeneralContext);
