import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b-[1px] border-gray-300 bg-purple-100">
      <div className="container mx-auto py-2 flex items-center justify-between ">
        <a href="/">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Lotus Flower Logo"
              className="w-16 h-16 mr-2"
            />
            <span className="uppercase italic text-sm prose font-medium">Autonomous Intelligence Research</span>
          </div>

        </a>

        <nav className="space-x-4 uppercase italic text-sm font-semibold text-whitee leading-tight tracking-tight" >
          <Link href="/">
            <a className="">Home</a>
          </Link>
          <Link href="/funding">
            <a className="">Funding</a>
          </Link>
          <Link href="/process">
            <a className="">Process</a>
          </Link>
          <Link href="/team">
            <a className="">Team</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
