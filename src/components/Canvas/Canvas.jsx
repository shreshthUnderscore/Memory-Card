import React, { useEffect } from "react";
import Card from "../Card/card";

function Canvas() {
  useEffect(() => {
    const fetchEmoji = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}?name=slightly smiling face`,
          {
            headers: {
              "X-Api-Key": `${import.meta.env.VITE_API_KEY}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchEmoji();
  }, []);

  return (
    <>
      <div>
        <Card />
      </div>
    </>
  );
}

export default Canvas;
