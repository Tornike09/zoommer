"use client";
import { useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { Products } from "../components/Products/Products";
import styles from "./page.module.css";
import { RootState } from "../../../redux/store";
import { Filter } from "../components/Filter/Filter";

const PhoneCases = () => {
  const category = useSelector((state: RootState) => state.category);
  return (
    <div>
      <Header />
      <div className={styles.mainCont}>
        <div className={styles.cont}>
          <Filter />
          <Products
            category={category}
            listType={"vertical"}
            gift={false}
            hardCodeCat={"phonecase"}
          />
        </div>
      </div>
    </div>
  );
};
export default PhoneCases;
