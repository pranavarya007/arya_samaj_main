import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { logo } from "../assets/images";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className=' flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={logo}
            alt='logo'
            width={100}
            height={29}
            className='m-0 w-[100px] h-[29px]'
          />
          
        </a>
        <p className="text-xl font-montserrat text-coral-red font-medium hover:font-bold">Arya Samaj Mandir</p>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
          
        </ul>
        {/*
          <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
          */}

          
          <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/blog'>Blogs</a>
          </div>
        
         {/* Hamburger Icon 
          
          
          <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
          
          
          */}
        


      <div className="relative hidden max-lg:block z-50">
      {/* Hamburger Icon */}
      
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none lg:hidden"
      >
      <img src={hamburger} alt='hamburger icon' width={25} height={25} />
      </button>

      {/* Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <Link to="/" className="text-white text-xl py-4 hover:text-2xl" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="#about-us" className="text-white text-xl py-4 hover:text-2xl" onClick={toggleMenu}>
            About Us
          </Link>
          <Link to="#services" className="text-white text-xl py-4 hover:text-2xl" onClick={toggleMenu}>
            Our Services
          </Link>
          <Link to="/contact" className="text-white text-xl py-4 hover:text-2xl" onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link to="/blog" className="text-white text-xl py-4 hover:text-2xl" onClick={toggleMenu}>
            Blog
          </Link>
        </div>
      </div>
    </div>
      </nav>
    </header>
  );
};

export default Nav;
