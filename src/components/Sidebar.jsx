const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        className="drawer-overlay"
        onClick={onClose}
      ></label>

      <div
        className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
