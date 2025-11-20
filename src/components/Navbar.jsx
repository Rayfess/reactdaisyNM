import React, { useEffect, useCallback } from "react";

const Navbar = ({ onToggle = () => {}, sidebarOpen = false }) => {
  // ✅ Debug props when component mounts/updates
  useEffect(() => {
    console.log("🔵 [Navbar] Props received:", {
      hasOnToggle: !!onToggle,
      onToggleType: typeof onToggle,
      sidebarOpen,
      isOnToggleFunction: typeof onToggle === "function",
    });
  }, [onToggle, sidebarOpen]);

  const handleToggle = useCallback(() => {
    console.log("🔄 [Navbar] Toggle button clicked");

    if (typeof onToggle === "function") {
      onToggle();
    } else {
      console.error(
        "❌ [Navbar] onToggle is not a function! Received:",
        onToggle
      );
    }
  }, [onToggle]);

  return (
    <nav className="navbar bg-base-100 fixed top-0 z-50 shadow-sm w-full">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MyApp</a>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal space-x-2">
          <li>
            <a className="btn btn-ghost">Home</a>
          </li>
          <li>
            <a className="btn btn-ghost">About</a>
          </li>
          <li>
            <a className="btn btn-ghost">Contact</a>
          </li>
        </ul>
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          className="btn btn-square btn-ghost"
          onClick={handleToggle}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={!!sidebarOpen}
        >
          {/* Simplified icon toggle without DaisyUI swap */}
          {sidebarOpen ? (
            // Close icon
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
