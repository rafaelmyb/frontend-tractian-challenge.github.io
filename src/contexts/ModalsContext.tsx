import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ModalsContextProps {
  isCreateAssetOpen: boolean;
  setIsCreateAssetOpen: Dispatch<SetStateAction<boolean>>;
  handleCloseIsCreateAssetModal(): void;
  handleOpenIsCreateAssetModal(): void;
  isCreateWorkOrderOpen: boolean;
  setIsCreateWorkOrderOpen: Dispatch<SetStateAction<boolean>>;
  handleCloseIsCreateWorkOrderModal(): void;
  handleOpenIsCreateWorkOrderModal(): void;
  isCreateUserOpen: boolean;
  setIsCreateUserOpen: Dispatch<SetStateAction<boolean>>;
  handleCloseIsCreateUserModal(): void;
  handleOpenIsCreateUserModal(): void;
  isCreateUnitOpen: boolean;
  setIsCreateUnitOpen: Dispatch<SetStateAction<boolean>>;
  handleCloseIsCreateUnitModal(): void;
  handleOpenIsCreateUnitModal(): void;
  isUpdateAssetOpen: boolean;
  setIsUpdateAssetOpen: Dispatch<SetStateAction<boolean>>;
  handleCloseIsUpdateAssetModal(): void;
  handleOpenIsUpdateAssetModal(): void;
  isUpdateUnitOpen: boolean;
  setIsUpdateUnitOpen: Dispatch<SetStateAction<boolean>>;
  handleCloseIsUpdateUnitModal(): void;
  handleOpenIsUpdateUnitModal(): void;
  isUpdateUserOpen: boolean;
  setIsUpdateUserOpen: Dispatch<SetStateAction<boolean>>;
  handleCloseIsUpdateUserModal(): void;
  handleOpenIsUpdateUserModal(): void;
}

const ModalsContext = createContext({} as ModalsContextProps);

interface ModalsProviderProps {
  children: ReactNode;
}

export function ModalsProvider({ children }: ModalsProviderProps) {
  const [isCreateAssetOpen, setIsCreateAssetOpen] = useState(false);
  const [isCreateWorkOrderOpen, setIsCreateWorkOrderOpen] = useState(false);
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [isCreateUnitOpen, setIsCreateUnitOpen] = useState(false);
  const [isUpdateAssetOpen, setIsUpdateAssetOpen] = useState(false);
  const [isUpdateUnitOpen, setIsUpdateUnitOpen] = useState(false);
  const [isUpdateUserOpen, setIsUpdateUserOpen] = useState(false);

  function handleCloseIsCreateAssetModal() {
    setIsCreateAssetOpen(false);
  }

  function handleOpenIsCreateAssetModal() {
    setIsCreateAssetOpen(true);
  }

  function handleCloseIsCreateWorkOrderModal() {
    setIsCreateWorkOrderOpen(false);
  }

  function handleOpenIsCreateWorkOrderModal() {
    setIsCreateWorkOrderOpen(true);
  }

  function handleCloseIsCreateUserModal() {
    setIsCreateUserOpen(false);
  }

  function handleOpenIsCreateUserModal() {
    setIsCreateUserOpen(true);
  }

  function handleCloseIsCreateUnitModal() {
    setIsCreateUnitOpen(false);
  }

  function handleOpenIsCreateUnitModal() {
    setIsCreateUnitOpen(true);
  }

  function handleCloseIsUpdateAssetModal() {
    setIsUpdateAssetOpen(false);
  }

  function handleOpenIsUpdateAssetModal() {
    setIsUpdateAssetOpen(true);
  }

  function handleCloseIsUpdateUnitModal() {
    setIsUpdateUnitOpen(false);
  }

  function handleOpenIsUpdateUnitModal() {
    setIsUpdateUnitOpen(true);
  }

  function handleCloseIsUpdateUserModal() {
    setIsUpdateUserOpen(false);
  }

  function handleOpenIsUpdateUserModal() {
    setIsUpdateUserOpen(true);
  }

  return (
    <ModalsContext.Provider
      value={{
        isCreateAssetOpen,
        setIsCreateAssetOpen,
        handleOpenIsCreateAssetModal,
        handleCloseIsCreateAssetModal,
        isCreateWorkOrderOpen,
        setIsCreateWorkOrderOpen,
        handleCloseIsCreateWorkOrderModal,
        handleOpenIsCreateWorkOrderModal,
        isCreateUserOpen,
        setIsCreateUserOpen,
        handleOpenIsCreateUserModal,
        handleCloseIsCreateUserModal,
        isCreateUnitOpen,
        setIsCreateUnitOpen,
        handleOpenIsCreateUnitModal,
        handleCloseIsCreateUnitModal,
        isUpdateAssetOpen,
        setIsUpdateAssetOpen,
        handleOpenIsUpdateAssetModal,
        handleCloseIsUpdateAssetModal,
        isUpdateUnitOpen,
        setIsUpdateUnitOpen,
        handleOpenIsUpdateUnitModal,
        handleCloseIsUpdateUnitModal,
        isUpdateUserOpen,
        setIsUpdateUserOpen,
        handleOpenIsUpdateUserModal,
        handleCloseIsUpdateUserModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}

export const useModalsContext = () => useContext(ModalsContext);
