import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (


    <div className={`Container max-w-[1200px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 py-5 font-serif ${menuOpen ? 'menu-open' : ''}`}>


   {/* Hamburger Icon */}
      <div className="menu-icon lg:hidden md:hidden sm:block text-center shadow-lg bg-purple-200 w-40 rounded hover:scale-125 duration-1000 py-2 cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? 'Close' : 'Menu'}
      </div>

      <div className={`menu-item text-center shadow-lg bg-purple-200 w-40 rounded hover:scale-125 duration-1000 py-2`}>
        Home
      </div>
      <div className={`menu-item text-center shadow-lg bg-purple-200 w-40 rounded hover:scale-125 duration-1000 py-2`}>
        About
      </div>
      <div className={`menu-item text-center shadow-lg bg-purple-200 w-40 rounded hover:scale-125 duration-1000 py-2`}>
        Contact
      </div>
      <div className={`menu-item text-center shadow-lg bg-purple-200 w-40 rounded hover:scale-125 duration-1000 py-2`}>
        Features
      </div>

   
    </div>
  );
};

export default HamburgerMenu;
