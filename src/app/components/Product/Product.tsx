"use client";
import { IProduct } from "@/app/types";
import Image from "next/image";
import styles from "./Product.module.css";
import arrowImage from "../../../app/images/compare-card.svg";
import cartButton from "../../../app/images/cart-button.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/slices/cartSlice/cartSlice";
import giftIcon from "../../../app/images/gift.png";
import { RootState } from "../../../../redux/store";
import { useState } from "react";
import { AlreadyInCart } from "../AlreadyInCart/AlreadyInCart";
import Link from "next/link";

interface IMobileProps {
  product: IProduct;
  gift: boolean;
}

export const Product: React.FC<IMobileProps> = ({ product, gift }) => {
  const [alreadyInCartModal, setAlreadyInCartModal] = useState(false);
  const cartItems = useSelector((State: RootState) => State.cart);

  const existingItem = cartItems.find((item) => item._id === product._id);

  const dispatch = useDispatch();

  const handleProductToCart = (product: IProduct) => {
    if (existingItem) {
      setAlreadyInCartModal(true);
    } else {
      dispatch(addToCart(product));
    }
  };

  const closeModal = () => {
    if (alreadyInCartModal) {
      setAlreadyInCartModal(false);
    }
  };
  return (
    <>
      <li className={styles.mobileItem}>
        <Link href={""}>
          {gift && (
            <div className={styles.giftIcon}>
              <div className={styles.giftIcon}>
                <Image src={giftIcon} alt="" />
              </div>
            </div>
          )}
          <div
            className={styles.imageCont}
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
          <div>
            <h4>
              <span>{product.price} ₾</span>
              <span className={styles.prevPrice}>
                {product.previousPrice} ₾
              </span>
            </h4>
            <p>{product.title}</p>
          </div>
          <div className={styles.cartButtons}>
            <button>
              <Image src={arrowImage} alt="" />
            </button>
            <button
              className={styles.addToCart}
              onClick={() => handleProductToCart(product)}
            >
              {existingItem ? null : <Image src={cartButton} alt="" />}
              <span>{existingItem ? "კალათაშია" : "დაამატე"}</span>
            </button>
          </div>
        </Link>
      </li>
      {alreadyInCartModal && <AlreadyInCart closeModal={closeModal} />}
    </>
  );
};
