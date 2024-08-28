import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/appContextProvider";
import NavProvider from "../context/navContextProvider";
import Header from "./Header";
import Drawer from "./drawer";

function Layout() {
  const { navEnabled } = useAppContext();

  if (navEnabled) {
    return (
      <NavProvider>
        <div className="flex h-screen">
          {/* Drawer (Sidebar) */}
          <div className="fixed z-50 h-full xl:relative xl:w-64 bg-gray-800 text-white">
            <Drawer />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col min-h-full bg-gray-100 pl-64">
            {/* Header */}
            <Header />

            {/* Main Outlet for Content */}
            <main className="flex-grow overflow-y-auto p-4">
              <Outlet />
            </main>
          </div>
        </div>
      </NavProvider>
    );
  }

  return <Navigate to="/" />;
}

export default Layout;
