import React, { useEffect, useState } from "react";
import Card from "../Card/card";
import styles from "./Canvas.module.css";

function Canvas({ emojiArray, buttonClick }) {
  return (
    <>
      <div className={styles.canvas}>
        {emojiArray.map((emojiObject) => (
          <Card
            key={emojiObject.id}
            data={emojiObject}
            buttonClick={buttonClick}
          />
        ))}
      </div>
    </>
  );
}

export default Canvas;
