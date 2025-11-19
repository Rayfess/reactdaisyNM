const Sidebar = ({ onClose }) => {
  const menuItems = ["Home", "About", "Contact", "Settings"];

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        className="drawer-overlay"
        onClick={onClose}
      ></label>

      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        <div className="py-20 space-y-5">
          {menuItems.map((item) => (
            <li key={item}>
              <a className="text-lg" onClick={onClose}>
                {item}
              </a>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
