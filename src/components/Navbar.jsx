const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed py-2 z-50 shadow-sm">
      <div className="navbar-start">
        {/* dropdown < 1024 */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-primary-500 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
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
        </div>
        {/* dropdown < 1024 */}
        <a className="btn btn-ghost text-primary font-bold text-3xl">
          LearnBy DOING
        </a>
      </div>
      <div className="navbar-end lg:mx-5 hidden lg:flex">
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
        <a className="btn btn-primary text-lg">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
