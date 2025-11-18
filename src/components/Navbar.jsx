import { useState } from "react";
import { Sidebar, SidebarController } from "./Sidebar";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-100 fixed py-2 z-50 shadow-sm w-full">
          <div className="mx-2 flex-1 px-2">
            <a className="btn btn-ghost text-primary font-bold text-3xl">
              LearnBy DOING
            </a>
          </div>
          <div className="hidden flex-none lg:flex items-center">
            <ul className="menu menu-horizontal space-x-5 px-5 items-center">
              <li>
                <a className="btn btn-ghost font-normal text-lg">Services</a>
              </li>
              <li>
                <a className="btn btn-ghost font-normal text-lg">Project</a>
              </li>
              <li>
                <a className="btn btn-ghost font-normal text-lg">Contact Us</a>
              </li>
              <ThemeController />
            </ul>
            <a className="btn btn-primary text-lg lg:me-5">Get Started</a>
          </div>
          <SidebarController
            onToggle={handleToggleSidebar}
            isOpen={isSidebarOpen}
          />
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};

export default Navbar;
