import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const WithOutNFLayout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
    </>
  );
};

export default WithOutNFLayout;
