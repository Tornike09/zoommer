"use client";
import styles from "./ClearCartModal.module.css";
import xIcon from "../../../app/images/mobile-modal-close.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../../redux/slices/cartSlice/cartSlice";
import { RootState } from "../../../../redux/store";

interface IClearCartModalProps {
  handleModal: () => void;
}

export const ClearCartModal: React.FC<IClearCartModalProps> = ({ handleModal }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const clearWholeCart = () => {
    dispatch(clearCart(cartItems));  // Clear the cart by dispatching the action without passing cartItems
    handleModal();
  };

  return (
    <div className={styles.wrapper} aria-modal="true" role="dialog" aria-labelledby="clearCartTitle">
      <div className={styles.blurCont}></div>
      <div className={styles.modalCont}>
        <div className={styles.modalHead}>
          <Image
            src={xIcon}
            alt="Close modal"
            onClick={handleModal}
            className={styles.closeIcon}
            aria-label="Close modal"
          />
          <h3 id="clearCartTitle">კალათის გასუფთავება</h3>
        </div>
        <div className={styles.clearCont}>
          <h3>ნამდვლიად გსურთ კალათის გასუფთავება?</h3>
          <div className={styles.buttons}>
            <button onClick={clearWholeCart}>დიახ</button>
            <button className={styles.orange} onClick={handleModal}>არა</button>
          </div>
        </div>
      </div>
    </div>
  );
};
