"use client";
import { useState, useEffect } from "react";
import styles from "./FilterPrice.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { handleMinPrice } from "../../../../redux/slices/minPriceSlice/minPriceSlice";
import { handleMaxPrice } from "../../../../redux/slices/maxPriceSlice/maxPriceSlice";

export const FilterPrice = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const min = useSelector((state: RootState) => state.minPrice);
  const max = useSelector((state: RootState) => state.maxPrice);

  // Local state for max product price
  const [maxProductPrice, setMaxProductPrice] = useState<number>(0);

  // Update maxProductPrice when products change
  useEffect(() => {
    const highestPrice = Math.max(
      ...products.map((product) => product.price + 1),
      0
    );
    setMaxProductPrice(highestPrice);
  }, [products]);

  const getMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    dispatch(handleMinPrice(value));
  };

  const getMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    dispatch(handleMaxPrice(value));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.priceInput}>
        <div className={styles.input}>
          <span>Min</span>
          <input type="number" value={min} onChange={getMinPrice} />
          <span>₾</span>
        </div>
        <input
          type="range"
          value={min}
          onChange={getMinPrice}
          min={0}
          max={maxProductPrice}
        />
      </div>
      <div className={styles.priceInput}>
        <div className={styles.input}>
          <span>Max</span>
          <input
            type="number"
            value={max === 0 ? maxProductPrice : max}
            onChange={getMaxPrice}
          />
          <span>₾</span>
        </div>
        <input
          type="range"
          value={max === 0 ? maxProductPrice : max}
          onChange={getMaxPrice}
          min={0}
          max={maxProductPrice}
        />
      </div>
    </div>
  );
};
