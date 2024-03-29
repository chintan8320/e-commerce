"use client";
import ProductSection from "@components/ProductSection";
import HeaderSection from "@components/HeaderSection";

const page = () => {
  return (
    <>
      <HeaderSection pageName="Products" />
      <ProductSection />
    </>
  );
};

export default page;
