import React from "react";
import styles from "./card.module.css";

export default function Card({ data, buttonClick }) {
  return (
    <>
      <button className={styles.button} onClick={buttonClick} id={data.id}>
        <img id={data.id} src={data.imageUrl}></img>
      </button>
    </>
  );
}
