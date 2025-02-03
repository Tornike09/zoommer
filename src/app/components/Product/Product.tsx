"use client";
import { IProduct } from "@/app/types";
import Image from "next/image";
import styles from "./Product.module.css";
import arrowImage from "../../../app/images/compare-card.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/slices/cartSlice/cartSlice";
import giftIcon from "../../../app/images/gift.png";
import { RootState } from "../../../../redux/store";
import { useState } from "react";
import { AlreadyInCart } from "../AlreadyInCart/AlreadyInCart";
import Link from "next/link";
import { AddToCart } from "../AddToCart/AddToCart";

interface IMobileProps {
  product: IProduct;
  gift: boolean;
}

export const Product: React.FC<IMobileProps> = ({ product, gift }) => {
  return (
    <>
      <li className={styles.mobileItem}>
        {gift && (
          <div className={styles.giftIcon}>
            <div className={styles.giftIcon}>
              <Image src={giftIcon} alt="" />
            </div>
          </div>
        )}
        <Link
          href={`product/${product.category.replace(/\s+/g, "")}/${
            product._id
          }`}
        >
          <div
            className={styles.imageCont}
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
        </Link>
        <div>
          <h4>
            <span>{product.price} ₾</span>
            <span className={styles.prevPrice}>{product.previousPrice} ₾</span>
          </h4>
          <p>{product.title}</p>
        </div>
        <div className={styles.cartButtons}>
          <button>
            <Image src={arrowImage} alt="" />
          </button>
          <AddToCart product={product} type={"big"} />
        </div>
      </li>
    </>
  );
};
