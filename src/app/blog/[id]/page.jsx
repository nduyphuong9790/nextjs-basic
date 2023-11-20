import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.leftContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.iconImgContainer}>
            <Image
              src={data.image}
              alt=""
              width={25}
              height={25}
              className={styles.iconImg}
            />
            <p className={styles.iconTitle}>{data.username}</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={data.image}
            alt=""
            width={350}
            height={200}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
