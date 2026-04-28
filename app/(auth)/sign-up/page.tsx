"use client";
import AuthForm from "@/components/form/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import React from "react";

const SingUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true })}
    />
  );
};

export default SingUp;
