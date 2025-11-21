import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [theme, setTheme] = useState("default");

  const toggleTheme = () => {
    const newTheme = theme === "default" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        readOnly
      />

      <div className="drawer-content">
        <Navbar
          onToggle={toggleSidebar}
          sidebarOpen={sidebarOpen}
          onTheme={toggleTheme}
          currentTheme={theme}
        />
        <main className="pt-16">
          {children}
          <Footer />
        </main>
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
    </div>
  );
};

export default Layout;
