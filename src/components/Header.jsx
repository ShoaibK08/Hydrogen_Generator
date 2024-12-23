
import React from 'react';

import logo from '../assets/logo.png';
import icon2 from '../assets/icon2.png';

const Header = () => {
  return (
    <header className="border-b relative border-neutral-900 h-20 sticky top-0 left-0 w-full z-[100] bg-white">
      <div className="w-[95%] max-w-[90%] mx-auto flex justify-between items-center h-full">
        <a href="/">
          <img src={logo} alt="logo" className="h-[45px]" />
        </a>
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="/" className="size-8 sm:size-10 border-[0.67px] border-[#05252433] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-neutral-100">
            <img src={icon2} alt="" className="w-4 sm:w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;