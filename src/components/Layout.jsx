import { useCallback, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ DEBUG: Log state changes
  console.log("🔵 [Layout] sidebarOpen state:", sidebarOpen); //false

  useEffect(() => {
    const drawerCheckbox = document.getElementById("my-drawer");
    console.log(
      "🟡 [Layout/useEffect] Syncing to DaisyUI. Checkbox exists:",
      !!drawerCheckbox
    );

    if (drawerCheckbox) {
      console.log(
        "🟢 [Layout/useEffect] Before sync - checkbox.checked:",
        drawerCheckbox.checked
      );
      drawerCheckbox.checked = sidebarOpen;
      console.log(
        "🟢 [Layout/useEffect] After sync - checkbox.checked:",
        drawerCheckbox.checked
      );
    }
  }, [sidebarOpen]); //false

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
    console.log(
      "🔄 [Layout] toggleSidebar called. Current state:",
      sidebarOpen
    );
  }, [sidebarOpen]);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
    console.log("❌ [Layout] closeSidebar called");
  }, []);

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <Navbar onToggle={toggleSidebar} sidebarOpen={sidebarOpen} />
        <main className="pt-16">{children}</main>
      </div>

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
    </div>
  );
};

export default Layout;
