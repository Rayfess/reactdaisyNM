import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="drawer-content">
        <Navbar onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="pt-16">{children}</main>
      </div>

      <Sidebar onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Layout;
