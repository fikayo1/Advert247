import Image from "next/image";
import Link from "next/link";

import { ChevronDown } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="bg-[#0022ee] px-6 py-5 flex items-center justify-between text-white">
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
           
            {/* Menu Links */}
            <div className="hidden md:flex space-x-6 items-center font-semibold">
                <Link href="/about" className="hover:text-gray-300">
                About <ChevronDown className="inline-block" />
                </Link>
                <Link href="/signup" className="hover:text-gray-300">
                New Drivers <ChevronDown className="inline-block" />
                </Link>
                <Link href="/drivers" className="hover:text-gray-300">
                Current Drivers <ChevronDown className="inline-block" />
                </Link>
                {/* <Link href="/" className="hover:text-gray-300">
                Shop
                </Link> */}
                <Link href="/about#faq" className="hover:text-gray-300">
                FAQ
                </Link>
            </div>
        </div>

      {/* Driver Login Button */}
      <div>
        <Link href="/drivers" passHref>
              <Image
                src="/buttons/driver-login.png" 
                alt="Driver-login Icon"
                width={140}
                height={10}
              />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


