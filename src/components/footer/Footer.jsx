import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Lamamia. All rights reserved.</div>
      <div className={styles.imgContainer}>
        <Image
          src="/1.png"
          alt=""
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt=""
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt=""
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt=""
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
