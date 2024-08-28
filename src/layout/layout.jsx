// import React from "react";
// import { Outlet } from "react-router-dom";
// import { useAppContext } from "../context/appContextProvider";
// import NavProvider from "../context/navContextProvider";
// import Header from "./Header";
// import DrawerComponent from "./drawer"; // Renamed to avoid conflict

// function Layout() {
//   const { navEnabled } = useAppContext(); // This will work because Layout is wrapped in AppProvider

//   return (
//     <NavProvider>
//       <div className="flex h-screen">
//         {/* Drawer (Sidebar) */}
//         <div className="fixed z-50 h-full xl:relative xl:w-64 bg-gray-800 text-white">
//           <DrawerComponent />
//         </div>
//         {/* Main Content */}
//         <div className="flex-1 flex flex-col bg-gray-100 pl-64">
//           <Header />
//           <main className="flex-grow overflow-y-auto p-4">
//             <Outlet />
//           </main>
//         </div>
//       </div>
//     </NavProvider>
//   );
// }

// export default Layout;


import React from "react";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/appContextProvider";
import NavProvider from "../context/navContextProvider";
import Header from "./Header";
import DrawerComponent from "./drawer";

function Layout() {
  const { navEnabled } = useAppContext();

  return (
    <NavProvider>
      <div className="flex h-screen">
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-gray-100">
          <Header />
          <div className="flex flex-grow overflow-hidden">
            <div className="flex-shrink-0 bg-gray-800 text-white">
              <DrawerComponent />
            </div>
            <main className="flex-grow overflow-y-auto p-4">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </NavProvider>
  );
}

export default Layout;