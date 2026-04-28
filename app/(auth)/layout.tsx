import SocialAuthForm from "@/components/form/SocialAuthForm";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark px-4 py-10 bg-cover bg-center bg-no-repeat">
      <section className="light-border background-light800_dark200 px-4 py-10 rounded-[10px] min-w-full sm:min-w-[520px] shadow-light100_dark100 shadow-md">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your questions answered
            </p>
          </div>
          <Image
            src="/images/site-logo.svg"
            width={50}
            height={50}
            alt="DevFlow"
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
