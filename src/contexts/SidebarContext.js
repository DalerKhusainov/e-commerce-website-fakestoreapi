// REACT HOOKS
import { createContext, useState } from "react";

// CREATE CONTEXT
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // SIDEBAR STATE
  const [isOpen, setIsOpen] = useState(false);

  // SIDEBAR CLOSE HANDLE
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
