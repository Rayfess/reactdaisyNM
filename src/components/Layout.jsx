import { useState, useCallback, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  console.log("🔵 [Layout] sidebarOpen state:", sidebarOpen);

  const toggleSidebar = useCallback(() => {
    console.log("🔄 [Layout] toggleSidebar called");
    setSidebarOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    console.log("❌ [Layout] closeSidebar called");
    setSidebarOpen(false);
  }, []);

  // Keep resize behavior: automatically close drawer on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  return (
    <div className="drawer drawer-end">
      {/* Controlled checkbox: React is single source of truth */}
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={(e) => setSidebarOpen(e.target.checked)}
      />

      <div className="drawer-content">
        {console.log("🔁 [Layout] Passing props to Navbar:", {
          toggleSidebarExists: !!toggleSidebar,
          toggleSidebarType: typeof toggleSidebar,
        })}
        <Navbar onToggle={toggleSidebar} sidebarOpen={sidebarOpen} />
        <main className="pt-16">{children}</main>
      </div>

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
    </div>
  );
};

export default Layout;
