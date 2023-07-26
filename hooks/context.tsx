"use client"
import React, { createContext, useState, useContext } from 'react';

interface SidebarContextValue {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextValue>({
    sidebarOpen: false,
    toggleSidebar: () => { },
});

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: any) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};
