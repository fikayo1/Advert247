"use client"

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

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
            {/* About Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-gray-300"
                onMouseEnter={() => setShowAboutDropdown(true)}
                onMouseLeave={() => setShowAboutDropdown(false)}
              >
                About
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              {showAboutDropdown && (
                <div
                  className="absolute top-full left-0 bg-[#0022ee] py-2 min-w-[160px] shadow-lg rounded-b-md z-50"
                  onMouseEnter={() => setShowAboutDropdown(true)}
                  onMouseLeave={() => setShowAboutDropdown(false)}
                >
                  <Link href="/about" className="block px-4 py-2 hover:bg-blue-700">
                    About Us
                  </Link>
                  <Link href="/contact-us" className="block px-4 py-2 hover:bg-blue-700">
                    Contact Us
                  </Link>
                </div>
              )}

            </div>

            <Link href="/signup" className="hover:text-gray-300">
              New Drivers
            </Link>
            <Link href="/drivers" className="hover:text-gray-300">
              Current Drivers
            </Link>
            <Link href="/fleets" className="hover:text-gray-300">
              Fleets
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
        className={`${isOpen ? 'block' : 'hidden'
          } md:hidden absolute top-full left-0 right-0 bg-[#0022ee] text-white w-full shadow-lg z-50`}
      >
        <div className="flex flex-col space-y-4 p-4">
          {/* Mobile About Section */}
          <div>
            <button
              className="w-full flex items-center justify-between hover:text-gray-300"
              onClick={() => setShowAboutDropdown(!showAboutDropdown)}
            >
              <span>About</span>
              <ChevronDown className={`h-4 w-4 transform transition-transform ${showAboutDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* Mobile About Dropdown */}
            {showAboutDropdown && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  href="/about"
                  className="block hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact-us"
                  className="block hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/signup"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            New Drivers
          </Link>
          <Link
            href="/drivers"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Current Drivers
          </Link>
          <Link
            href="/fleets"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Fleets
          </Link>
          <Link
            href="/faq"
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