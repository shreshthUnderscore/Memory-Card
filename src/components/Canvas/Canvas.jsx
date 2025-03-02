import React, { useEffect, useState } from "react";
import Card from "../Card/card";
import styles from "./Canvas.module.css";

function Canvas() {
  const [emojiArray, setEmojiArray] = useState([]);

  useEffect(() => {
    const fetchEmoji = async () => {
      const emojiIds = [
        "1f600",
        "1f603",
        "1f604",
        "1f601",
        "1f642",
        "1f60a",
        "1f617",
        "1f61a",
        "1f619",
        "1f61b",
        "1f610",
        "1f611",
      ];

      try {
        const emojiData = emojiIds.map((id) => ({
          id,
          imageUrl: `${import.meta.env.VITE_API_URL}${id}/512.png`,
        }));

        setEmojiArray(emojiData);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchEmoji();
  }, []);

  return (
    <>
      <div className={styles.canvas}>
        {emojiArray.map((emojiObject) => (
          <Card key={emojiObject.id} data={emojiObject} />
        ))}
      </div>
    </>
  );
}

export default Canvas;
