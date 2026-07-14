import React from 'react'
import ContactContent from '@/components/contact/ContactContent'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact - DevSquad",
  description:
    "Get in touch with the DevSquad team.",
};

const Contact = () => {
  return (
    <>
      <ContactContent />
    </>
  )
}

export default Contact
