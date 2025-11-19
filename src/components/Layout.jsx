import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={toggleSidebar}
      />

      <div className="drawer-content">
        <Navbar onToggle={toggleSidebar} sidebarOpen={sidebarOpen} />
        <main className="pt-16">{children}</main>
      </div>

      <Sidebar onClose={closeSidebar} />
    </div>
  );
};

export default Layout;
