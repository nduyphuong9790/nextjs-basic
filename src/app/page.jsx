import Image from "next/image";
import Hero from "../../public/hero.png";
import styles from "./page.module.css";
import Button from "../components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button text="See Our Work" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image
          src={Hero}
          alt=""
          width={500}
          height={500}
          className={styles.img}
        />
      </div>
    </div>
  );
}
