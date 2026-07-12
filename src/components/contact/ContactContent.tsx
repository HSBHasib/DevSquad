import React from "react";
import ContactInfo from "./leftSide/LeftSide";
import ContactForm from "./contactForm/ContactForm";


const ContactContent = () => {
  return (
    <div className="min-h-screen bg-[#070A13] py-12 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side Section */}
        <ContactInfo />

        {/* Right Side Section */}
        <ContactForm />

      </div>
    </div>
  );
};

export default ContactContent;
