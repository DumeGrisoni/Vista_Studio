import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="h-[60px] fixed top-0 left-0 bg-white border-b border-gris/50 w-full flex items-center justify-between md:px-32">
      <div className="hidden items-center md:flex">
        <Image
          className="mx-auto"
          src="/Logo Texte.svg"
          alt="Vista Studio"
          width={100}
          height={100}
        />
      </div>
      <div className="flex items-center  w-full justify-center">
        <ul className="flex items-center space-x-4 text-gris font-semibold">
          <li>
            <a href="/dev-web" className="hover:text-noir transition">
              Sites Web
            </a>
          </li>
          <li>
            <a
              href="/content-management"
              className="hover:text-noir transition"
            >
              Content Manager
            </a>
          </li>
          <li>
            <a href="/contact-infos" className="hover:text-noir transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
