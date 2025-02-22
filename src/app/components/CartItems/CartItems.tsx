"use client";
import { useSelector } from "react-redux";
import styles from "./CartItems.module.css";
import { RootState } from "../../../../redux/store";
import { CartItem } from "../CartItem/CartItem";
export const CartItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  return (
    <div className={styles.wrapper}>
      <div className={styles.cartItems}>
        <ul>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem._id} cartItem={cartItem} />
          ))}
        </ul>
      </div>
    </div>
  );
};
