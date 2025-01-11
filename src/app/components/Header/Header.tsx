"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import icon from "../../../app/images/header-phone.svg";
import mainLogo from "../../../app/images/main-logo.svg";
import dots from "../../../app/images/dots.svg";
import search from "../../../app/images/main-search.svg";
import cart from "../../../app/images/header-cart.svg";
import { useEffect, useState } from "react";
import { CartModal } from "../CartModal/CartModal";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { IProduct } from "@/app/types";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons'; // Import regular version

export const Header = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const router = usePathname();

  const cartItems = useSelector((state: RootState) => state.cart);

  const totalItems =
    cartItems?.reduce(
      (acc: number, item: IProduct) => acc + item.quantity,
      0
    ) || 0;

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currenScreenSize = document.documentElement.clientWidth;

  return (
    <>
      <div className={styles.headerNavBar}>
        <div className={styles.navBarItems}>
          <div>
            <Image src={icon} alt="" />
            <h4>*7007 / +995 (32) 2 60 30 60</h4>
          </div>
          <div>
            <h4>სავაჭრო პოლიტიკა</h4>
            <h4>განვადება</h4>
            <h4>კარიერა</h4>
            <h4>Trade In</h4>
            <h4>ფილიალები</h4>
            <h4>ყველა აქცია</h4>
          </div>
        </div>
      </div>
      <div className={styles.headerMainCont}>
        <div className={styles.headerMainContItems}>
          <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
          {isMenuOpen && (
            <BurgerMenu closeMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          )}
          <Link href={"/"}>
            <Image src={mainLogo} alt="" />
          </Link>
          <div className={styles.navCont}>
            <Image src={dots} alt="" />
            <h4>ნავიგაცია</h4>
          </div>
          <div className={styles.search}>
            <Image src={search} alt="" />
            <input type="text" placeholder="ძიება" />
          </div>
          <div className={styles.spaceBtwn}></div>
          <div
            className={styles.cartCont}
            onMouseEnter={toggleCartModal}
            onMouseLeave={toggleCartModal}
          >
            <Link href={"/cart"}>
              <h4>
                <Image src={cart} alt="" />
                <p>კალათა</p>
              </h4>
            </Link>
            {isCartModalOpen &&
              currenScreenSize > 1024 &&
              !(router === "/cart") && (
                <CartModal closeModal={toggleCartModal} />
              )}
            {cartItems.length > 0 && (
              <div className={styles.productQty}>
                <span>{totalItems}</span>
              </div>
            )}
          </div>
          <div className={styles.cartCont}>
            <FontAwesomeIcon icon={faUserRegular} />
            <h4>
              <p>შესვლა</p>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
