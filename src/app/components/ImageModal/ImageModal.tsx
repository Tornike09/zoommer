import styles from "./ImageModal.module.css";
import Image from "next/image";
import xIcon from "../../../app/images/mobile-modal-close.svg";

interface IImageModalProps {
  toggleMdoal: () => void;
  image: string;
}
export const ImageModal: React.FC<IImageModalProps> = ({
  toggleMdoal,
  image,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blurCont}></div>
      <div className={styles.modalCont}>
        <div className={styles.modalHead}>
          <Image src={xIcon} alt="" onClick={toggleMdoal} />
        </div>
        <div
          className={styles.imageCont}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </div>
  );
};
