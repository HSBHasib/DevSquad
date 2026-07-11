import React from 'react'
import RegisterContent from '@/components/regAndLog/register/RegisterContent'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - DevSquad",
  description: "Create a new DevSquad account",
};

const RegisterPage = () => {
  return (
    <div>
      <RegisterContent />
    </div>
  )
}

export default RegisterPage
