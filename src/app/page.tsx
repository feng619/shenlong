"use client";

import React from "react";

import CategorySection from "./components/CategorySection";
import CustomerForm from "./components/CustomerForm";
import DeliverySection from "./components/DeliverySection";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import StorePictureSection from "./components/StorePictureSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <MainSection />

      <div className="max-w-7xl">
        <StorePictureSection />
        <CustomerForm />
        <DeliverySection />
        <CategorySection />
      </div>

      <Footer />
    </main>
  );
}
