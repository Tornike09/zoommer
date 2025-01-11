import styles from "./AlreadyInCart.module.css";
import Image from "next/image";
import xIcon from "../../../app/images/mobile-modal-close.svg";

interface IAlreadyInCartProps {
  closeModal: () => void;
}
export const AlreadyInCart: React.FC<IAlreadyInCartProps> = ({
  closeModal,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blurCont}></div>
      <div className={styles.modalCont}>
        <div className={styles.modalHead}>
          <Image src={xIcon} alt="" onClick={closeModal} />
          <h3>გაფრთხილება!</h3>
        </div>
        <div className={styles.clearCont}>
          <h3>ნივთი უკვე კალათაშია</h3>
          <div>
            <input type="submit" value="გასაგებია" onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};
