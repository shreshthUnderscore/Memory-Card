import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <h1>Emoji Memory Card Game</h1>
        <h3>Click Images That Haven't Been Clicked Before</h3>
      </div>

      <div className={styles.score}>
        <h2>Score: </h2>
        <h2>High Score: </h2>
      </div>
    </>
  );
}

export default Header;
