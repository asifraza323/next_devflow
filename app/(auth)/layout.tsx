import SocialAuthForm from "@/components/forms/SocialAuthForm";
import Image from "next/image";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark px-4 py-10 bg-cover bg-center bg-no-repeat">
      <section className="light-border border background-light800_dark200 min-w-full sm:min-w-[520px] rounded-[10px] shadow-light100_dark100 px-4 py-10 sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your questions answered
            </p>
          </div>
          <Image
            src="/images/site-logo.svg"
            width={50}
            height={50}
            alt="DevFlow Logo"
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
