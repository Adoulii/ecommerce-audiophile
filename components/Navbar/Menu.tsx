import Link from "next/link";
import router, { useRouter } from "next/router";
import React from "react";
const Menu = () => {
  return (
    <div className="md:flex md:gap-8 grid grid-cols-1 grid-rows-4 gap-4 text-center text-subtitle font-bold">
      <a href="#" className="block uppercase text-white hover:text-[#D87D4A]">
        home
      </a>
      <Link
        className="block uppercase text-white hover:text-[#D87D4A]"
        href="/headphones"
      >
        headphones
      </Link>
      <Link
        className="block uppercase text-white hover:text-[#D87D4A]"
        href="/speakers"
      >
        speakers
      </Link>
      <Link
        className="block uppercase text-white hover:text-[#D87D4A]"
        href="/earphones"
      >
        earphones
      </Link>
     
    </div>
  );
};

export default Menu;
