"use client";
import React from "react";
import ProducList from "@components/ProductList";
import HeaderSection from "@components/HeaderSection";

const ProductPage = () => {
  return (
    <div>
      <HeaderSection pageName="Products" />
      <ProducList />
    </div>
  );
};

export default ProductPage;
