"use client";
import { useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import styles from "./page.module.css";
import { RootState } from "../../../redux/store";
import image from "../../app/images/emptybag.svg";
import Image from "next/image";
import { useState } from "react";
import { CartContent } from "../components/CartContent/CartContent";

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Access cart items from Redux store
  const cartItems = useSelector((state: RootState) => state.cart);

  // Handle modal toggling
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      {cartItems && cartItems.length > 0 ? (
        <CartContent isModalOpen={isModalOpen} handleModal={handleModal}/>
      ) : (
        <div className={styles.emptyBag}>
          <Image src={image} alt="Empty cart" />
        </div>
      )}
    </div>
  );
};

export default Cart;
