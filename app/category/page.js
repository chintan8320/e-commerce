"use client";
import React from "react";
import Category from "@components/CategoryView";
import HeaderSection from "@components/HeaderSection";

function page() {
  return (
    <div>
      <HeaderSection pageName="Category" />
      <Category />
    </div>
  );
}

export default page;
