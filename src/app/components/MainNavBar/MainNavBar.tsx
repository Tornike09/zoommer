"use client";
import styles from "./MainNavBar.module.css";
import { navBar } from "../../datas/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../../../redux/slices/categorySlice/categorySlice";
import Link from "next/link";

export const MainNavBar = () => {
  const dispatch = useDispatch();
  const handleNavCategory = (category: string) => {
    dispatch(changeCategory(category));
  };
  return (
    <div className={styles.navBar}>
      <ul>
        {navBar.map((navBarItem) => (
          <li
            className={`${navBarItem.id === 1 ? styles.first : ""} ${
              navBarItem.id === 8 ? styles.last : ""
            }`}
            onClick={() => handleNavCategory(navBarItem.category)}
            key={navBarItem.id}
          >
            <Link href={`/${navBarItem.route}`}>
              <h4>
                <FontAwesomeIcon icon={navBarItem.icon} />
                <p>{navBarItem.title}</p>
              </h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
