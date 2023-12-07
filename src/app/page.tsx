"use client";

import React from "react";

import CategorySection from "./components/CategorySection";
import CustomerFormSmall from "./components/sm/CustomerFormSmall";
import DeliverySection from "./components/DeliverySection";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import MainSectionSmall from "./components/sm/MainSectionSmall";
import DeliverySectionSmall from "./components/sm/DeliverySectionSmall";
import CategorySectionSmall from "./components/sm/CategorySectionSmall";
import StorePictureSectionSmall from "./components/sm/StorePictureSectionSmall";

export default function Home() {
  const [width, setWidth] = React.useState(0);
  const breakpoint = 640; // sm
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-between">
      {width < breakpoint ? (
        <div className="w-full">
          <MainSectionSmall />
          <StorePictureSectionSmall />
          <CustomerFormSmall />
          <DeliverySectionSmall />
          <CategorySectionSmall />
        </div>
      ) : (
        <div className="max-w-7xl">
          <MainSection />
          <CustomerFormSmall />
          <DeliverySection />
          <CategorySection />
        </div>
      )}

      <Footer />
    </main>
  );
}
