const Navbar = () => {
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
            <ul className="menu menu-horizontal space-x-5 px-5">
              <li>
                <a className="text-lg">Services</a>
              </li>
              <li>
                <a className="text-lg">Project</a>
              </li>
              <li>
                <a className="text-lg">Contact Us</a>
              </li>
            </ul>
            <a className="btn btn-primary text-lg lg:me-5">Get Started</a>
          </div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
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
            <a className="btn btn-primary text-lg">Get Started</a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
