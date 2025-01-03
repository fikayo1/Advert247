"use client"

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0022ee] px-6 py-5 relative">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center">
          {/* Logo Section */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image
                src="/images/logo.png"
                alt="Adverts Logo"
                width={140}
                height={40}
                className="mr-4"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex space-x-6 items-center font-semibold">
            <Link href="/about" className="hover:text-gray-300">
              About 
            </Link>
            <Link href="/signup" className="hover:text-gray-300">
              New Drivers 
            </Link>
            <Link href="/drivers" className="hover:text-gray-300">
              Current Drivers 
            </Link>
            <Link href="/contact-us" className="hover:text-gray-300">
              Contact Us
            </Link>
            <Link href="/faq" className="hover:text-gray-300">
              FAQ
            </Link>
          </div>
        </div>

        {/* Driver Login Button */}
        <div className="flex items-center">
          <Link href="/drivers" passHref className="hidden md:block">
            <Image
              src="/buttons/driver-login.png"
              alt="Driver-login Icon"
              width={140}
              height={10}
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute top-full left-0 right-0 bg-[#0022ee] text-white w-full shadow-lg z-50`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link
            href="/about"
            className="hover:text-gray-300 flex items-center justify-between"
            onClick={() => setIsOpen(false)}
          >
            <span>About</span>
          </Link>
          <Link
            href="/signup"
            className="hover:text-gray-300 flex items-center justify-between"
            onClick={() => setIsOpen(false)}
          >
            <span>New Drivers</span>
          </Link>
          <Link
            href="/drivers"
            className="hover:text-gray-300 flex items-center justify-between"
            onClick={() => setIsOpen(false)}
          >
            <span>Current Drivers</span>
          </Link>
          <Link
            href="/about#faq"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          {/* Mobile Driver Login Button */}
          <Link href="/drivers" passHref onClick={() => setIsOpen(false)}>
            <Image
              src="/buttons/driver-login.png"
              alt="Driver-login Icon"
              width={140}
              height={10}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;