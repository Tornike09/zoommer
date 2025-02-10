"use client";
import { IProduct } from "@/app/types";
import styles from "./ProductDeatils.module.css";
import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal";
import { priceOptions } from "@/app/datas/priceOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import compare from "../../../app/images/compare.svg";
import Image from "next/image";
import { AddToCart } from "../AddToCart/AddToCart";

interface IProductDetailsProps {
  product: IProduct;
}
export const ProductDetails: React.FC<IProductDetailsProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.mainCont}>
          <div className={styles.imageAndTitle}>
            <h4>{product.title}</h4>
            <div
              onClick={toggleModal}
              className={styles.imageCont}
              style={{ backgroundImage: `url(${product.image})` }}
            >
              {isModalOpen && (
                <ImageModal toggleMdoal={toggleModal} image={product.image} />
              )}
            </div>
          </div>
          <div className={styles.about}>
            <div>
              <h4 className={styles.optionTitle}>ბრენდი</h4>
              <h4 className={styles.optionValue}>{product.brand}</h4>
            </div>
            <div>
              <h4 className={styles.optionTitle}>მოდელი</h4>
              <h4 className={styles.optionValue}> {product.title}</h4>
            </div>
          </div>
        </div>
        <div className={styles.priceCont}>
          <div className={styles.price}>
            <span className={styles.newPrice}>{product.price}₾</span>
            <span className={styles.prevPrice}>{product.previousPrice}₾</span>
          </div>
          <div className={styles.options}>
            {priceOptions.map((priceOption) => (
              <div key={priceOption.id}>
                <h4>
                  <FontAwesomeIcon icon={priceOption.icon} />
                  <p>{priceOption.title}</p>
                </h4>
              </div>
            ))}
          </div>
          <div className={styles.operations}>
            <button>ყიდვა</button>
            <div>
              <button className={styles.compare}>
                <Image src={compare} alt="" />
                <span>შედარება</span>
              </button>
              <AddToCart product={product} type={"big"} />
            </div>
          </div>
        </div>
        <div className={styles.respPriceCont}>
          <div>
            <div>
              <span className={styles.respPrice}>{product.price}₾</span>
              <span className={styles.respPrevPrice}>
                {product.previousPrice}₾
              </span>
            </div>
          </div>
          <div>
            <div className={styles.compCont}>
              <Image src={compare} alt="" />
            </div>
            <div>
              <AddToCart product={product} type={""} />
            </div>
            <div>
              <button className={styles.buyBtn}>ყიდვა</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
