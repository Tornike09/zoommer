"use client";
import styles from "./FilterBrand.module.css";
import upArrow from "../../../app/images/up-arrow.svg";
import downArrow from "../../../app/images/551749-200.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import filterIcon from "../../../app/images/filter.svg";
import { RespFilter } from "../RespFilter/RespFilter";
import { HandleBrand } from "../HandleBrand/HandleBrand";

export const FilterBrand = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(true);
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  //open or close dropdown menu
  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleFilterModal = () => {
    setFilterModal(!filterModal);
  };

  // Track window size with useEffect
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial set on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.filterWrapper}>
      <div>
        <div className={styles.brandsHeader} onClick={toggleDropDown}>
          <h4>ბრენდები</h4>
          <Image
            src={isDropDownOpen ? upArrow : downArrow}
            alt="Toggle Dropdown"
          />
        </div>
        {screenWidth > 768 && <HandleBrand isDropDownOpen={isDropDownOpen} />}
      </div>
      <div className={styles.respFilterCont}>
        <div>
          <button onClick={toggleFilterModal}>
            <Image src={filterIcon} alt="" />
            <span>ფილტრი</span>
          </button>
          {filterModal && screenWidth < 768 && (
            <RespFilter closeMenu={toggleFilterModal} isMenuOpen={true} />
          )}
        </div>
      </div>
    </div>
  );
};
