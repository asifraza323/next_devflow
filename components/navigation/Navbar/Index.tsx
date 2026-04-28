import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theem";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed w-full z-50 p-6 sm:px-12 shadow-light-300 dark:shadow-none gap-5">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow Logo"
        />
        <p className="h2-bold font-space-grotesk text-light-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <p>GlobalSearch</p>
      <div className="flex-between gap-5">
        <Theme />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
