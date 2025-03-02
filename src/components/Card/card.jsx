import React from "react";
import styles from "./card.module.css";

export default function Card(data) {
  return (
    <>
      <button className={styles.button}>
        <img src={data.data.imageUrl}></img>
      </button>
    </>
  );
}
