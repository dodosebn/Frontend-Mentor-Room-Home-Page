import React, { useState } from 'react';
import logo from '../images/logo.svg';
import menu from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <>
  <header className='absolute z-10 p-8 w-full flex items-center justify-center lg:items-center lg:justify-start'>
    <div>
      <img src={logo} alt="logo" className='lg:mr-8'/>
    </div>
    <div className={`${isOpen ? "bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0" : "bg-transparent" }`}>
    <nav className={`flex-col lg:flex-row lg:flex lg:items-center ${isOpen ? "open w-full py-8 lg:py-0" : "hidden lg:flex "}`}> 
      <ul className='flex items-center justify-center flex-wrap gap-4'>
        <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white'>Home</button></li>
        <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white'>Shop</button></li>
        <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white'>About</button></li>
        <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white'>Contact</button></li>
      </ul>
    </nav>
    <div className='absolute left-8 top-8 z-20 lg:hidden'>
    {isOpen ? (
      <button onClick={() => setIsOpen(false)}>
        <img src={close} alt="closebtn" />
      </button>
    ) : (
      <button onClick={() => setIsOpen(true)}>
        <img src={menu} alt="menubtn" />
      </button>
    )}
    </div>
    </div>
  </header>
  </>
  )
}

export default Header;
