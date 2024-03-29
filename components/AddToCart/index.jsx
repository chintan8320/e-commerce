// components/NotificationDropdown.js
import { useState } from 'react';

const AddToCart = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center justify-end">
      <div>
        <div
          className={`fixed bg-slate-200 right-0 origin-right overflow-y-auto top-0 z-10 w-56 h-screen py-1 bg-white shadow-lg focus:outline-none transition-transform ${
            open ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
        >
          <button
            className="p-1 m-3 absolute right-0 rounded-md  hover:bg-slate-100 fill-gray-500 hover:fill-gray-700"
            onClick={handleToggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 24 24"
              style={{ transform: 'none', msFilter: 'none' }}
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </button>

          <div className="flex items-center justify-center mt-12">
            <span className="fill-gray-500 block">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                <circle cx="8.5" cy="10.5" r="1.5"></circle>
                <circle cx="15.493" cy="10.493" r="1.493"></circle>
                <path d="M12 14c-3 0-4 3-4 3h8s-1-3-4-3z"></path>
              </svg>
              No Items
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
