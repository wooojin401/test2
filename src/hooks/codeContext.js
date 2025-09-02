import { createContext, useContext, useState } from "react";

const CodeContext = createContext();
export const useCodeContext = () => useContext(CodeContext);

export const CodeProvider = ({ children }) => {
  const [selectedType, setSelectedType] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [posts, setPosts] = useState([]);
  const handleTypeChange = (type) => {
    setSelectedType(type);
    console.log("Selected type changed to:", type);
  };
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <CodeContext.Provider value={{ selectedType, handleTypeChange, 
    sidebarOpen, openSidebar, closeSidebar , userInfo,setUserInfo, posts, setPosts  }}>
      {children}
    </CodeContext.Provider>
  );
}