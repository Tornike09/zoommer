"use client";
import { useDispatch } from "react-redux";
import { Header } from "../Header/Header";
import { MainContent } from "../MainContent/MainContent";
import { usePathname } from "next/navigation";
import { handleBrand } from "../../../../redux/slices/brandSlice/brandSlice";
import { useEffect, useState } from "react";
import { handleMaxPrice } from "../../../../redux/slices/maxPriceSlice/maxPriceSlice";
import { handleMinPrice } from "../../../../redux/slices/minPriceSlice/minPriceSlice";

export const Wrapper = () => {
  const router = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleBrand(null));
    dispatch(handleMaxPrice(0));
    dispatch(handleMinPrice(0));
  }, [router]);

  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};
