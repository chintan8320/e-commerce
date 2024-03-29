"use client";
import React from "react";
import CheckoutForm from "@components/CheckoutForm";
import HeaderSection from "@components/HeaderSection";

const Checkout = () => {
  return (
    <div>
      <HeaderSection pageName="Checkout" />
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
