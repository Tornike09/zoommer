"use client";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./BurgerMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import search from "../../../app/images/main-search.svg";
import Image from "next/image";
import { navBar } from "@/app/datas/navBar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../../../redux/slices/categorySlice/categorySlice";
import { MenuContent } from "../MenuContent/MenuContent";
import { RootState } from "../../../../redux/store";

interface IBurgerMenuProps {
  closeMenu: () => void;
  isMenuOpen: boolean;
}
export const BurgerMenu: React.FC<IBurgerMenuProps> = ({
  closeMenu,
  isMenuOpen,
}) => {
  const category = useSelector((state: RootState) => state.category);

  const [positionLeft, setPositionLeft] = useState<number>(-1000);
  const [positionRight, setPositionRight] = useState<number>();
  const [imagesCategory, setImagesCategory] = useState<string>(category);

  const router = usePathname();

  useEffect(() => {
    setPositionLeft(isMenuOpen ? 0 : -1000);
  }, [isMenuOpen]);

  useEffect(() => {
    setPositionRight(isMenuOpen ? -1000 : 0);
  }, [isMenuOpen]);

  const dispatch = useDispatch();
  const handleNavCategory = (category: string) => {
    dispatch(changeCategory(category));
  };

  const handleCategoryOnMouseOver = (category: string) => {
    setImagesCategory(category);
  };

  return (
    <div
      className={styles.burgerWrapper}
      style={{ left: `${positionLeft}px`, right: `${positionRight}px` }}
    >
      <div>
        <div className={styles.menuHeader}>
          <div>
            <FontAwesomeIcon icon={faX} onClick={closeMenu} />
            <div className={styles.search}>
              <Image src={search} alt="" />
              <input type="text" placeholder="ძიება" />
            </div>
          </div>
        </div>
        <div className={styles.menuNavigation}>
          <ul>
            {navBar.map((navBarItem) => (
              <li
                key={navBarItem.id}
                onClick={() => handleNavCategory(navBarItem.category)}
                onMouseOver={() =>
                  handleCategoryOnMouseOver(navBarItem.category)
                }
                className={
                  router === `/${navBarItem.route}` ? styles.active : ""
                }
              >
                <Link href={navBarItem.route}>
                  <div className={styles.navBarItem}>
                    <FontAwesomeIcon icon={navBarItem.icon} />
                    <h4>{navBarItem.title}</h4>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <MenuContent imagesCategory={imagesCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};
