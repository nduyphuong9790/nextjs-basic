import React from "react";
import styles from "./portfolio.module.css";

export const metadata = {
  title: "portfolio page",
  description: "this is portfolio page",
};

const PortfolioLayout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default PortfolioLayout;
