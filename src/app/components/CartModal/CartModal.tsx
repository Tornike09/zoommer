"use client";
import styles from "./CartModal.module.css";
import emptyBag from "../../../app/images/emptybag.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { CartItemInModal } from "../CartItemInModal/CartItemInModal";
import { IProduct } from "@/app/types";
import Link from "next/link";

interface ICartModalProps {
  closeCartModal: () => void;
}

export const CartModal: React.FC<ICartModalProps> = ({ closeCartModal }) => {
  const cartItems = useSelector((state: RootState) => state.cart);

  const totalPrice =
    cartItems?.reduce(
      (acc: number, item: IProduct) => acc + item.price * item.quantity,
      0
    ) || 0;

  const totalItems =
    cartItems?.reduce(
      (acc: number, item: IProduct) => acc + item.quantity,
      0
    ) || 0;

  return (
    <div
      className={styles.cartModalCont}
      onMouseLeave={closeCartModal}
      aria-modal="true"
      role="dialog"
    >
      <div className={styles.cartModalContent}>
        <p>
          <span>კალათა</span>
          <span>{totalItems} პროდუქტი</span>
        </p>
        <div className={styles.cartContent}>
          {cartItems.length > 0 ? (
            <div className={styles.cartItemsCont}>
              <ul>
                {cartItems.map((cartItem) => (
                  <CartItemInModal key={cartItem._id} cartItem={cartItem} />
                ))}
              </ul>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <Image src={emptyBag} alt="Empty cart illustration" />
              <p>კალათა ცარიელია</p>
            </div>
          )}
        </div>
        <h5>
          <span>ჯამური ფასი</span>
          <span>{totalPrice.toFixed(0)} ₾</span>
        </h5>
        <Link href={"/cart"}>
          <span>კალათის გახსნა</span>
        </Link>
      </div>
    </div>
  );
};
