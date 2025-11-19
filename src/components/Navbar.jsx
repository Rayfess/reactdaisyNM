const Navbar = ({ onToggle }) => {
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
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost"
          onClick={onToggle}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
