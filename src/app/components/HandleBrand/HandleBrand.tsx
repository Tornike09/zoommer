import { useEffect, useState } from "react";
import { handleBrand } from "../../../../redux/slices/brandSlice/brandSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import styles from "./HandelBrand.module.css";
import Image from "next/image";
import activeCheckbox from "../../../app/images/filter-checkbox-active.svg";
import disabledCheckBox from "../../../app/images/filter-checkbox-disabled.svg";
import { usePathname } from "next/navigation";

interface IHandleBrandProps {
  isDropDownOpen: boolean;
}

export const HandleBrand: React.FC<IHandleBrandProps> = ({
  isDropDownOpen,
}) => {
  const [selectedBrandIdx, setSelectedBrandIdx] = useState<number | null>(null);
  const chosenBrand = useSelector((state: RootState) => state.brand);
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products);

  const uniqueBrands = [...new Set(products.map((product) => product.brand))];

  //select or unselect brand
  const toggleBrandSelection = (index: number, brand: string) => {
    if (selectedBrandIdx === index) {
      setSelectedBrandIdx(null);
      dispatch(handleBrand(""));
    } else {
      setSelectedBrandIdx(index);
      dispatch(handleBrand(brand));
    }
  };

  return (
    <div>
      {isDropDownOpen && (
        <ul>
          {uniqueBrands.map((brand, index) => (
            <li key={index} className={styles.brandItem}>
              <div onClick={() => toggleBrandSelection(index, brand)}>
                <Image
                  src={
                    brand === chosenBrand ? activeCheckbox : disabledCheckBox
                  }
                  alt={brand}
                />
                <p>{brand}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
