import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import Button from "../../components/button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>

      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill={true} className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button text="Send" url="#" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
