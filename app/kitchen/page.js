"use client";
import React from "react";
import KitchenItems from "@components/Kitchen";
import HeaderSection from "@components/HeaderSection";

const Items = () => {
  return (
    <div>
      <HeaderSection pageName="Speaker" />
      <KitchenItems />
    </div>
  );
};

export default Items;
