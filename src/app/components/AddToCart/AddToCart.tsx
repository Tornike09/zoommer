"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddToCart.module.css";
import { RootState } from "../../../../redux/store";
import { useState } from "react";
import { addToCart } from "../../../../redux/slices/cartSlice/cartSlice";
import { IProduct } from "@/app/types";
import Image from "next/image";
import cartButton from "../../../app/images/cart-button.svg";
import { AlreadyInCart } from "../AlreadyInCart/AlreadyInCart";

interface IAddToCartProps {
  product: IProduct;
  type: "big" | "small" | ""; // Restricting to specific string values
}

export const AddToCart: React.FC<IAddToCartProps> = ({ product, type }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const existingItem = cartItems.find((item) => item._id === product._id);
  const [alreadyInCartModal, setAlreadyInCartModal] = useState(false);

  const handleProductToCart = (product: IProduct) => {
    if (existingItem) {
      setAlreadyInCartModal(true); // If the product is already in the cart, show modal
    } else {
      dispatch(addToCart(product)); // If not, add the product to the cart
    }
  };

  const closeModal = () => setAlreadyInCartModal(false);

  return (
    <>
      {type === "big" ? (
        <button
          className={styles.addToCartBig}
          onClick={() => handleProductToCart(product)}
        >
          {!existingItem && <Image src={cartButton} alt="Add to cart" />}
          <span>{existingItem ? "კალათაშია" : "დაამატე"}</span>
        </button>
      ) : (
        <div
          className={styles.respAddToCart}
          onClick={() => handleProductToCart(product)}
        >
          <Image src={cartButton} alt="Add to cart" />
        </div>
      )}
      {alreadyInCartModal && <AlreadyInCart closeModal={closeModal} />}
    </>
  );
};
