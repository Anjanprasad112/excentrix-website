"use client";

import Link from "next/link";



const NavbarComp = () => {
  return (
    <div className="fixed top-5 inset-x-0 max-w-40 mx-auto z-50">
      <div className="bg-white max-w-40 flex items-center justify-center gap-5 rounded-md py-2 cursor-pointer">
      <Link className="text-black font-semibold tracking-wide" href="#about">About</Link>
      <Link className="text-black font-semibold tracking-wide" href="#contact">Contact</Link>
      </div>
    </div>
  )
}

export default NavbarComp