import React from "react";
import NavLinks from "./Navbar/NavLinks";
import Link from "next/link";
import Routes from "@/constants/routes";
import { Button } from "../ui/button";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar p-6 pt-36 background-light900_dark200 light-border border-l sticky h-screen left-0 top-0 overflow-y-auto flex flex-col shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-5">
        <NavLinks />
        <div className="flex flex-col gap-3">
          <Button
            asChild
            className="small-medium btn-secondary w-full min-h-[41px] px-4 py-3 rounded-lg shadow-none"
          >
            <Link href={Routes.SIGN_IN}>
              <Image
                src="/icons/account.svg"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
                alt="account"
              />
              <span className="primary-text-gradient max-lg:hidden">Login</span>
            </Link>
          </Button>
          <Button
            asChild
            className="small-medium light-border-2 border btn-tertiary text-dark300_light900 w-full min-h-[41px] px-4 py-3 rounded-lg shadow-none"
          >
            <Link href={Routes.SIGN_UP}>
              <Image
                src="/icons/sign-up.svg"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
                alt="sign up"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
