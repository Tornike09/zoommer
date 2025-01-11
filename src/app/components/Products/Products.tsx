"use client";
import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import axios from "axios";
import { IProduct } from "@/app/types";
import { Product } from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { handleProducts } from "../../../../redux/slices/productsSlice/productsSlice";
import { RootState } from "../../../../redux/store";

interface IProductCategoryProps {
  category: string;
  listType: string;
  gift: boolean;
  hardCodeCat: string;
}

export const Products: React.FC<IProductCategoryProps> = ({
  category,
  listType,
  gift,
  hardCodeCat,
}) => {
  const [products, setProduct] = useState<IProduct[]>([]);
  const dispatch = useDispatch();
  const brand = useSelector((state: RootState) => state.brand);

  if (category === "") {
    category = hardCodeCat;
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `https://jsonserver.reactbd.com/${category}`
        );

        if (response.data) {
          setProduct(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    if (products) {
      dispatch(handleProducts(products));
    }
  }, [products]);

  return (
    <>
      {
        <div
          className={
            listType === "vertical"
              ? styles.productsContVert
              : styles.productsContHor
          }
        >
          <ul
            className={
              listType === "vertical"
                ? styles.productsUlVert
                : styles.productsUlHor
            }
          >
            {products.length > 0 &&
              products.map(
                (product) =>
                  (brand === "" || product.brand === brand) && (
                    <Product key={product._id} product={product} gift={gift} />
                  )
              )}
          </ul>
        </div>
      }
    </>
  );
};
