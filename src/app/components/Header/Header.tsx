import Image from "next/image";
import styles from "./Header.module.css";
import icon from "../../../app/images/header-phone.svg";
import { HeaderMainContent } from "../HeaderMainContent/HeaderMainContent";

export const Header = () => {
  return (
    <>
      <div className={styles.headerNavBar}>
        <div className={styles.navBarItems}>
          <div>
            <Image src={icon} alt="Phone icon for customer service" />
            <h4>*7007 / +995 (32) 2 60 30 60</h4>
          </div>
          <div>
            <h4>სავაჭრო პოლიტიკა</h4>
            <h4>განვადება</h4>
            <h4>კარიერა</h4>
            <h4>Trade In</h4>
            <h4>ფილიალები</h4>
            <h4>ყველა აქცია</h4>
          </div>
        </div>
      </div>
      <HeaderMainContent />
    </>
  );
};
