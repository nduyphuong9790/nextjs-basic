import React from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import wedsitesImg from "../../../public/websites.jpg";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Wedsites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;