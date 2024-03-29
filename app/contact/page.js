"use client";
import React from "react";
import ContactSection from "@components/ContactSection";
import HeaderSection from "@components/HeaderSection";

const ContactPage = () => {
  return (
    <div>
      <HeaderSection pageName="Contact" />
      <ContactSection />
    </div>
  );
};

export default ContactPage;
