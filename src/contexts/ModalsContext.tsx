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
}

const ModalsContext = createContext({} as ModalsContextProps);

interface ModalsProviderProps {
  children: ReactNode;
}

export function ModalsProvider({ children }: ModalsProviderProps) {
  const [isCreateWorkOrderOpen, setIsCreateWorkOrderOpen] = useState(false);

  function handleCloseIsCreateWorkOrderModal() {
    setIsCreateWorkOrderOpen(false);
  }

  function handleOpenIsCreateWorkOrderModal() {
    setIsCreateWorkOrderOpen(true);
  }

  return (
    <ModalsContext.Provider
      value={{
        isCreateWorkOrderOpen,
        setIsCreateWorkOrderOpen,
        handleCloseIsCreateWorkOrderModal,
        handleOpenIsCreateWorkOrderModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}

export const useModalsContext = () => useContext(ModalsContext);
