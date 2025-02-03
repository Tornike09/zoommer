"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import Image from "next/image";
import styles from "./MenuContent.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "@/app/types";

interface IMenuContentProps {
  imagesCategory: string;
}

export const MenuContent: React.FC<IMenuContentProps> = ({
  imagesCategory,
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `https://jsonserver.reactbd.com/${imagesCategory}`
        );

        if (response.data) {
          setProducts(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [imagesCategory]);

  if (imagesCategory === "") {
    imagesCategory = "phone";
  }

  return (
    <div className={styles.manuContentWrapper}>
      <ul>
        {products.length > 0 &&
          products.map((product) => (
            <li key={product._id}>
              <Image src={product.image} alt="" width={120} height={150} />
            </li>
          ))}
      </ul>
    </div>
  );
};
