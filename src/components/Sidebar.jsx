const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = ["Home", "About", "Contact", "Settings"];

  if (!isOpen) return null;

  return (
    <div className="drawer-side">
      {/* <div
        id="my-drawer"
        className="drawer-overlay"
        aria-label="close sidebar"
        onClick={onClose}
      ></div> */}
      <label
        htmlFor="my-drawer"
        class="drawer-overlay"
        onClick={onClose} // Tambahkan React handler juga
      />
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
