import React from "react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className="drawer-side ">
      <label
        htmlFor="my-drawer"
        className="drawer-overlay"
        onClick={onClose}
      ></label>

      <div
        className="menu relative p-4 w-80 min-h-full bg-base-200 text-base-content"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        {/* Close button inside the drawer for explicit close control */}
        <label
          htmlFor="my-drawer"
          className="btn btn-ghost btn-square absolute right-3 top-3"
          aria-label="Close menu"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M18.3 5.71L12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.3 9.18 12 2.88 5.71 4.29 4.29 10.59 10.6 16.88 4.29z" />
          </svg>
        </label>

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

export default React.memo(Sidebar);
