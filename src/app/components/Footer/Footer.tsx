'use client'
import Image from "next/image";
import styles from "./Footer.module.css";
import { footerData } from "@/app/datas/footer";
import { useState } from "react";

export const Footer = () => {
  

  return (
    <div className={styles.footerWrapper}>
      
      <div className={styles.footerCont}>
        <div>
          {footerData.map((footerItem) => (
            <ul key={footerItem.id}>
              <h4>
                <span>{footerItem.title}</span>
              </h4>
              {footerItem.items.map((item) => (
                <li key={item.id}>
                  <p>
                    {"image" in item && item.image && (
                      <Image src={item.image} alt={item.title} />
                    )}
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className={styles.copyRight}>
        <div>
          <h3>Copyright © 2025 Zoommer.ge. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
};
