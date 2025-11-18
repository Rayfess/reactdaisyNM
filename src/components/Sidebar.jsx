export const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        <div className="py-20 space-y-5">
          <li>
            <a className="text-lg">Services</a>
          </li>
          <li>
            <a className="text-lg">Project</a>
          </li>
          <li>
            <a className="text-lg">Contact Us</a>
          </li>
          <li>
            <a className="btn btn-primary text-lg">Get Started</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export const SidebarController = () => {
  return (
    <div className="flex-none">
      <label
        className="btn btn-square btn-ghost swap swap-rotate lg:hidden"
        // htmlFor="my-drawer-2"
        aria-label="open sidebar"
      >
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        {/* hamburger icon */}
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </div>
  );
};
