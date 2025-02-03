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
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const brand = useSelector((state: RootState) => state.brand);
  const min = useSelector((state: RootState) => state.minPrice)
  const max = useSelector((state: RootState) => state.maxPrice)

  const currentCategory = category || hardCodeCat; // Handle category fallback

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true); // Set loading state

      try {
        const response = await axios.get(
          `https://jsonserver.reactbd.com/${currentCategory}`
        );

        if (response.data) {
          setProducts(response.data);
          dispatch(handleProducts(response.data)); // Dispatch products to Redux store
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Reset loading state
      }
    };

    getProducts();
  }, [currentCategory, dispatch]); // Only run when category changes

  return (
    <div
      className={
        listType === "vertical"
          ? styles.productsContVert
          : styles.productsContHor
      }
    >
      <div>
        {loading && <div className={styles.loading}>Loading...</div>}{" "}
        {/* Loading Spinner */}
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
                (brand === "" || product.brand === brand) && (max === 0 || (min < product.price && product.price < max)) && (
                  <Product key={product._id} product={product} gift={gift} />
                )
            )}
        </ul>
      </div>
    </div>
  );
};
