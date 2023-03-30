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
  isWorkOrdersListDrawerOpen: boolean;
  setIsWorkOrdersListDrawerOpen: Dispatch<SetStateAction<boolean>>;
  handleOpenBasicInfoDrawer(): void;
  handleCloseBasicInfoDrawer(): void;
  handleOpenMetricsDrawer(): void;
  handleCloseMetricsDrawer(): void;
  handleOpenWorkOrdersListDrawer(): void;
  handleCloseWorkOrdersListDrawer(): void;
}

const DrawerContext = createContext({} as DrawerContextProps);

interface DrawerProviderProps {
  children: ReactNode;
}

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isBasicInfoDrawerOpen, setIsBasicInfoDrawerOpen] = useState(false);
  const [isMetricsDrawerOpen, setIsMetricsDrawerOpen] = useState(false);
  const [isWorkOrdersListDrawerOpen, setIsWorkOrdersListDrawerOpen] =
    useState(false);

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

  function handleOpenWorkOrdersListDrawer() {
    setIsWorkOrdersListDrawerOpen(true);
  }

  function handleCloseWorkOrdersListDrawer() {
    setIsWorkOrdersListDrawerOpen(false);
  }

  return (
    <DrawerContext.Provider
      value={{
        isBasicInfoDrawerOpen,
        setIsBasicInfoDrawerOpen,
        isMetricsDrawerOpen,
        setIsMetricsDrawerOpen,
        isWorkOrdersListDrawerOpen,
        setIsWorkOrdersListDrawerOpen,
        handleOpenBasicInfoDrawer,
        handleCloseBasicInfoDrawer,
        handleOpenMetricsDrawer,
        handleCloseMetricsDrawer,
        handleCloseWorkOrdersListDrawer,
        handleOpenWorkOrdersListDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawerContext = () => useContext(DrawerContext);
