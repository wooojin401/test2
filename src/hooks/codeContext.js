import { createContext, useContext, useState } from "react";

const CodeContext = createContext();
export const useCodeContext = () => useContext(CodeContext);

export const CodeProvider = ({ children }) => {
  const [selectedType, setSelectedType] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <CodeContext.Provider value={{ selectedType, handleTypeChange, 
    sidebarOpen, openSidebar, closeSidebar , userInfo,setUserInfo}}>
      {children}
    </CodeContext.Provider>
  );
}