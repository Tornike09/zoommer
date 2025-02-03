import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./RespNavBar.module.css";
import {
  faBars,
  faHouse,
  faPercent,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import compare from "../../../app/images/compare.svg";
import Image from "next/image";
export const RespNavBar = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h4>
          <FontAwesomeIcon icon={faHouse} />
          <span>მთავარი</span>
        </h4>
        <h4>
          <FontAwesomeIcon icon={faBars} />
          <span>კატეგორიები</span>
        </h4>
        <h4>
          <FontAwesomeIcon className={styles.percentageIcon} icon={faPercent} />
          <span>აქციები</span>
        </h4>
        <h4>
          <Image src={compare} alt="" />
          <span>შედარება</span>
        </h4>
        <h4>
          <FontAwesomeIcon icon={faUser} />
          <span>შესვლა</span>
        </h4>
      </div>
    </div>
  );
};
