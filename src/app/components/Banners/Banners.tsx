"use client";
import Image from "next/image";
import styles from "./Banners.module.css";
import { banners, respBanners } from "@/app/datas/banners";

export const Banners = () => {
  return (
    <>
      <div className={styles.swiperWrapper}>
        <ul>
          {banners.map((banner) => (
            <li key={banner.id}>
              <Image src={banner.src} alt="" />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.respSwiperWrapper}>
        <ul>
          {respBanners.map((respBanner) => (
            <li key={respBanner.id}>
              <Image src={respBanner.src} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
