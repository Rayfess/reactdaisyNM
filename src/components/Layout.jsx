import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

// KISS: inline simple theme names here (matches `src/index.css`)
const LIGHT = "light";
const DIM = "dim";
const DEFAULT_THEME = LIGHT;

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [theme, setTheme] = useState(DEFAULT_THEME);

  const toggleTheme = () => {
    const newTheme = theme === DIM ? LIGHT : DIM;
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
    document.querySelector("body").setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || DEFAULT_THEME;
    const allowed = [LIGHT, DIM];
    const active = allowed.includes(savedTheme) ? savedTheme : DEFAULT_THEME;
    setTheme(active);
    document.documentElement.setAttribute("data-theme", active);
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
  }, [sidebarOpen]);

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={(e) => setSidebarOpen(e.target.checked)}
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
