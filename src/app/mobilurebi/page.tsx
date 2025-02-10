"use client";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { Products } from "../components/Products/Products";
import styles from "./page.module.css";
import { RootState } from "../../../redux/store";
import { FilterBrand } from "../components/FilterBrand/FilterBrand";
import { Footer } from "../components/Footer/Footer";
import { RespNavBar } from "../components/RespNavBar/RespNavBar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { handleBrand } from "../../../redux/slices/brandSlice/brandSlice";
import { FilterPrice } from "../components/FilterPrice/FilterPrice";

const Phones = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0); // Track screen width

  const category = useSelector((state: RootState) => state.category);
  const router = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleBrand(null));
  }, [router]);

  // Track window size with useEffect
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.mainCont}>
        <div className={styles.cont}>
          <div className={styles.filterCont}>
            <FilterBrand />
            {screenWidth > 768 && <FilterPrice />}
          </div>
          <Products
            category={category}
            listType={"vertical"}
            gift={false}
            hardCodeCat={"phone"}
          />
        </div>
      </div>
      <Footer />
      <RespNavBar />
    </div>
  );
};
export default Phones;
