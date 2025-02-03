"use client";
import { IProduct } from "@/app/types";
import Image from "next/image";
import styles from "./CartItemInModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../../../../redux/slices/cartSlice/cartSlice";

interface ICartItemsProps {
  cartItem: IProduct;
}

export const CartItemInModal: React.FC<ICartItemsProps> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItem = (cartItemId: number) => {
    dispatch(removeFromCart(cartItemId)); // Ensure the ID is a number if you're using a number ID
  };

  const incrementItemQty = (cartItemId: number) => {
    dispatch(incrementQty(cartItemId));
  };

  const decrementItemQty = (cartItemId: number) => {
    dispatch(decrementQty(cartItemId));
  };

  return (
    <li className={styles.cartItem}>
      <div className={styles.cartItemCont}>
        <Image
          src={cartItem.image}
          alt={`Image of ${cartItem.title}`}
          width={70}
          height={70}
        />
        <div className={styles.aboutProduct}>
          <span>{cartItem.title}</span>
          <span>{cartItem.price} ₾</span>
        </div>
        <div className={styles.qtyCont}>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => removeItem(cartItem._id)}
            aria-label={`Remove ${cartItem.title} from cart`}
          />
          <h4 className={styles.changeQty}>
            <button
              aria-label={`Decrease quantity of ${cartItem.title}`}
              className={styles.operation}
              onClick={() => decrementItemQty(cartItem._id)}
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              aria-label={`Increase quantity of ${cartItem.title}`}
              className={styles.operation}
              onClick={() => incrementItemQty(cartItem._id)}
            >
              +
            </button>
          </h4>
        </div>
      </div>
    </li>
  );
};
