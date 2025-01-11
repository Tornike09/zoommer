import { Products } from "../Products/Products";
import styles from "./Swiper.module.css";

interface ISwiperProps {
  title: string;
  category: string;
  gift: boolean;
}

export const Swiper: React.FC<ISwiperProps> = ({ title, category, gift }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleCont}>
        <h3>{title}</h3>
      </div>
      <div className={styles.productsCont}>
        <Products
          category={category}
          listType={"horizontal"}
          gift={gift}
          hardCodeCat={""}
        />
      </div>
    </div>
  );
};
