import React from 'react'
import LoginContent from '@/components/regAndLog/login/LoginContent'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - DevSquad",
  description: "Login to your DevSquad account",
};

const LoginPage = () => {
  return (
    <div>
      <LoginContent />
    </div>
  )
}

export default LoginPage

