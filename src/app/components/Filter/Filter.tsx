"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.css";
import { RootState } from "../../../../redux/store";
import upArrow from "../../../app/images/up-arrow.svg";
import downArrow from "../../../app/images/551749-200.png";
import activeCheckbox from "../../../app/images/filter-checkbox-active.svg";
import disabledCheckBox from "../../../app/images/filter-checkbox-disabled.svg";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { handleBrand } from "../../../../redux/slices/brandSlice/brandSlice";
import { usePathname } from "next/navigation";

export const Filter = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(true);
  const [selectedBrandIdx, setSelectedBrandIdx] = useState<number | null>(null);
  const dispatch = useDispatch();
  const router = usePathname();

  const products = useSelector((state: RootState) => state.products);

  const uniqueBrands = [...new Set(products.map((product) => product.brand))];

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleBrandSelection = (index: number, brand: string) => {
    if (selectedBrandIdx === index) {
      setSelectedBrandIdx(null);
      dispatch(handleBrand(""));
    } else {
      setSelectedBrandIdx(index);
      dispatch(handleBrand(brand));
    }
  };

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
        {isDropDownOpen && (
          <ul>
            {uniqueBrands.map((brand, index) => (
              <li key={index} className={styles.brandItem}>
                <div onClick={() => toggleBrandSelection(index, brand)}>
                  <Image
                    src={
                      selectedBrandIdx === index
                        ? activeCheckbox
                        : disabledCheckBox
                    }
                    alt={brand}
                  />
                  <p>{brand}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
