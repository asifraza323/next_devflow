import React from "react";
import NavLinks from "./Navbar/NavLinks";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "../ui/button";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar flex h-screen flex-col justify-between p-6 pt-36 overflow-y-auto background-light900_dark200 shadow-light-300 dark:shadow-none light-border border-r sticky left-0 top-0 max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
        <div className="flex flex-col gap-3">
          <Button className="w-full min-h-[12px] rounded-lg small-medium btn-secondary light-border-2 shadow-none px-4 py-3">
            <Link href={ROUTES.SIGN_IN}>
              <Image
                src="/icons/account.svg"
                width={20}
                height={20}
                alt="account"
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">Login</span>
            </Link>
          </Button>
          <Button className="w-full min-h-[12px] rounded-lg small-medium btn-tertiary text-light-900 light-border-2 shadow-none px-4 py-3">
            <Link href={ROUTES.SIGN_UP}>
              <Image
                src="/icons/sign-up.svg"
                width={20}
                height={20}
                alt="account"
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">SignUp</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
