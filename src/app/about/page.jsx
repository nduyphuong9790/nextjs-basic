import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Button from "../../components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=300"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            rerum vero adipisci repellendus odit eaque earum. Ex molestias
            minima quia nulla nemo. Eum deserunt maxime autem dolorum veritatis
            <br /> <br />
            ducimus, ad nesciunt. Doloribus odit recusandae doloremque, non
            nobis cum consequatur? Sed iusto praesentium eos tenetur sunt.
            Quisquam, molestias quibusdam? Delectus autem provident molestiae,
            pariatur voluptate fugiat, sed ex accusantium sunt facilis, quo
            dolorem reprehenderit rerum esse nemo.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            quibusdam laudantium dolore pariatur, vero nam necessitatibus sequi
            inventore eum itaque sit dignissimos! Possimus corrupti soluta
            dolores, nemo distinctio earum veniam sequi tempora, esse deserunt
            <br /> <br />- Dynamic Wedsites
            <br />
            <br />- Fast and Handy
            <br />
            <br />- Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
