import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface DrawerContextProps {
  isBasicInfoDrawerOpen: boolean;
  setIsBasicInfoDrawerOpen: Dispatch<SetStateAction<boolean>>;
  isMetricsDrawerOpen: boolean;
  setIsMetricsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  handleOpenBasicInfoDrawer(): void;
  handleCloseBasicInfoDrawer(): void;
  handleOpenMetricsDrawer(): void;
  handleCloseMetricsDrawer(): void;
}

const DrawerContext = createContext({} as DrawerContextProps);

interface DrawerProviderProps {
  children: ReactNode;
}

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isBasicInfoDrawerOpen, setIsBasicInfoDrawerOpen] = useState(false);
  const [isMetricsDrawerOpen, setIsMetricsDrawerOpen] = useState(false);

  function handleOpenBasicInfoDrawer() {
    setIsBasicInfoDrawerOpen(true);
  }

  function handleCloseBasicInfoDrawer() {
    setIsBasicInfoDrawerOpen(false);
  }

  function handleOpenMetricsDrawer() {
    setIsMetricsDrawerOpen(true);
  }

  function handleCloseMetricsDrawer() {
    setIsMetricsDrawerOpen(false);
  }

  return (
    <DrawerContext.Provider
      value={{
        isBasicInfoDrawerOpen,
        setIsBasicInfoDrawerOpen,
        isMetricsDrawerOpen,
        setIsMetricsDrawerOpen,
        handleOpenBasicInfoDrawer,
        handleCloseBasicInfoDrawer,
        handleOpenMetricsDrawer,
        handleCloseMetricsDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawerContext = () => useContext(DrawerContext);
