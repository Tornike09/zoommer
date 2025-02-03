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
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons"; // Import regular version

export const Header = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(0); // Track screen width

  const router = usePathname();
  const cartItems = useSelector((state: RootState) => state.cart);

  const totalItems =
    cartItems?.reduce(
      (acc: number, item: IProduct) => acc + item.quantity,
      0
    ) || 0;

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Track window size with useEffect
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  return (
    <>
      <div className={styles.headerNavBar}>
        <div className={styles.navBarItems}>
          <div>
            <Image src={icon} alt="Phone icon for customer service" />
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
            {(cartItems.length > 0) && (!isMenuOpen) && (
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
