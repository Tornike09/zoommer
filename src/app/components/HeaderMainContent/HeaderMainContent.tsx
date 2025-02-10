'use client'
import mainLogo from "../../../app/images/main-logo.svg";
import dots from "../../../app/images/dots.svg";
import search from "../../../app/images/main-search.svg";
import cart from "../../../app/images/header-cart.svg";
import { CartModal } from "../CartModal/CartModal";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons"; // Import regular version
import styles from "./HeaderMainContent.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RootState } from "../../../../redux/store";
import { IProduct } from "@/app/types";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

export const HeaderMainContent = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0); // Track screen width
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);

  // Track window size with useEffect
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const router = usePathname();
  const cartItems = useSelector((state: RootState) => state.cart);

  const totalItems =
    cartItems?.reduce(
      (acc: number, item: IProduct) => acc + item.quantity,
      0
    ) || 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerMainCont}>
      <div className={styles.headerMainContItems}>
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
        {isMenuOpen && (
          <BurgerMenu closeMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        )}
        <Link href={"/"}>
          <Image src={mainLogo} alt="Main logo" />
        </Link>
        <div className={styles.navCont}>
          <Image src={dots} alt="Navigation dots icon" />
          <h4>ნავიგაცია</h4>
        </div>
        <div className={styles.search}>
          <Image src={search} alt="Search icon" />
          <input type="text" placeholder="ძიება" aria-label="Search" />
        </div>
        <div className={styles.spaceBtwn}></div>
        <div
          className={styles.cartCont}
          onMouseEnter={openCartModal}
          onMouseLeave={closeCartModal}
          aria-haspopup="true"
          aria-expanded={isCartModalOpen ? "true" : "false"}
        >
          <Link href={"/cart"}>
            <h4>
              <Image src={cart} alt="Shopping cart icon" />
              <p>კალათა</p>
            </h4>
          </Link>
          {isCartModalOpen && screenWidth > 1024 && !(router === "/cart") && (
            <CartModal closeCartModal={closeCartModal} />
          )}
          {cartItems.length > 0 && !isMenuOpen && (
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
  );
};
