import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ModalsContextProps {
  isCreateWorkOrderOpen: boolean;
  setIsCreateWorkOrderOpen: Dispatch<SetStateAction<boolean>>;
  handleCloseIsCreateWorkOrderModal(): void;
  handleOpenIsCreateWorkOrderModal(): void;
  isUpdateAssetOpen: boolean;
  setIsUpdateAssetOpen: Dispatch<SetStateAction<boolean>>;
  handleCloseIsUpdateAssetModal(): void;
  handleOpenIsUpdateAssetModal(): void;
}

const ModalsContext = createContext({} as ModalsContextProps);

interface ModalsProviderProps {
  children: ReactNode;
}

export function ModalsProvider({ children }: ModalsProviderProps) {
  const [isCreateWorkOrderOpen, setIsCreateWorkOrderOpen] = useState(false);
  const [isUpdateAssetOpen, setIsUpdateAssetOpen] = useState(false);

  function handleCloseIsCreateWorkOrderModal() {
    setIsCreateWorkOrderOpen(false);
  }

  function handleOpenIsCreateWorkOrderModal() {
    setIsCreateWorkOrderOpen(true);
  }

  function handleCloseIsUpdateAssetModal() {
    setIsUpdateAssetOpen(false);
  }

  function handleOpenIsUpdateAssetModal() {
    setIsUpdateAssetOpen(true);
  }

  return (
    <ModalsContext.Provider
      value={{
        isCreateWorkOrderOpen,
        setIsCreateWorkOrderOpen,
        handleCloseIsCreateWorkOrderModal,
        handleOpenIsCreateWorkOrderModal,
        isUpdateAssetOpen,
        setIsUpdateAssetOpen,
        handleOpenIsUpdateAssetModal,
        handleCloseIsUpdateAssetModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}

export const useModalsContext = () => useContext(ModalsContext);
