import Footer from "@/components/landingPage/footer/Footer";
import Navbar from "@/components/landingPage/navbar/Navbar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const WithNFLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default WithNFLayout;
