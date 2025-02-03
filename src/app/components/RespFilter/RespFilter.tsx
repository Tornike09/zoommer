"use client";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./RespFilter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Image from "next/image";
import upArrow from "../../../app/images/up-arrow.svg";
import downArrow from "../../../app/images/551749-200.png";
import { HandleBrand } from "../HandleBrand/HandleBrand";
import { FilterPrice } from "../FilterPrice/FilterPrice";

interface IBurgerMenuProps {
  closeMenu: () => void;
  isMenuOpen: boolean;
}

export const RespFilter: React.FC<IBurgerMenuProps> = ({
  closeMenu,
  isMenuOpen,
}) => {
  const [positionRight, setPositionRight] = useState<number>(-1000);
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(true);

  //open or close dropdown menu
  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  // Set positionLeft based on whether the menu is open or not
  useEffect(() => {
    setPositionRight(isMenuOpen ? 0 : -1000);
  }, [isMenuOpen]);

  console.log(positionRight);
  
  return (
    <div
      className={styles.filterWrapper}
      style={{ right: `${positionRight}px` }}
    >
      <div className={styles.blurCont}></div>
      <div className={styles.mainCont}>
        <div className={styles.menuHeader}>
          <div>
            <FontAwesomeIcon
              icon={faX}
              onClick={closeMenu}
              aria-label="Close menu"
            />
          </div>
        </div>
        <div className={styles.menuNavigation}>
          <div>
            <div className={styles.brandsHeader} onClick={toggleDropDown}>
              <h4>ბრენდები</h4>
              <Image
                src={isDropDownOpen ? upArrow : downArrow}
                alt="Toggle Dropdown"
              />
            </div>
            <div>
              <HandleBrand isDropDownOpen={isDropDownOpen} />
              <FilterPrice/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
