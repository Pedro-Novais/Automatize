import React, { createContext, useState } from 'react';
 
export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <SideBarContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </SideBarContext.Provider>
  )
}