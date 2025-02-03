"use client";
import { IProduct } from "@/app/types";
import styles from "./CartItem.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../../../../redux/slices/cartSlice/cartSlice";

interface ICartItemProps {
  cartItem: IProduct;
}

export const CartItem: React.FC<ICartItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();

  // Handle removal of item from cart
  const removeItem = (cartItemId: number) => {
    dispatch(removeFromCart(cartItemId));
  };

  // Decrement item quantity in the cart
  const decrementItemQty = (cartItemId: number) => {
    dispatch(decrementQty(cartItemId));
  };

  // Increment item quantity in the cart
  const incrementItemQty = (cartItemId: number) => {
    dispatch(incrementQty(cartItemId));
  };

  return (
    <li className={styles.cartItem}>
      <div className={styles.cartItemCont}>
        <Image
          width={70}
          height={70}
          src={cartItem.image}
          alt={`Image of ${cartItem.title}`}
        />
        <div className={styles.description}>
          <h3>
            <span>{cartItem.title}</span>
            <p>
              <span className={styles.price}>{cartItem.price} ₾</span>
              {cartItem.previousPrice && (
                <span className={styles.prevPrice}>
                  {cartItem.previousPrice} ₾
                </span>
              )}
            </p>
          </h3>
        </div>
        <div className={styles.qtyCont}>
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
          <FontAwesomeIcon
            className={styles.trashIcon} // Fixed typo here
            icon={faTrashCan}
            onClick={() => removeItem(cartItem._id)}
            aria-label={`Remove ${cartItem.title} from cart`}
          />
        </div>
      </div>
    </li>
  );
};
