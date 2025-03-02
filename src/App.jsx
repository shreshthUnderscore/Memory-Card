import React from "react";
import Header from "./components/header/header";
import Canvas from "./components/Canvas/Canvas";
import { useEffect, useState } from "react";

function App() {
  const [emojiArray, setEmojiArray] = useState([]);
  const [clickedEmoji, setClickedEmoji] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighscore] = useState(0);

  function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

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

  const buttonClick = (event) => {
    if (clickedEmoji.includes(event.target.getAttribute("id"))) {
      setScore(0);
      setClickedEmoji([]);
    } else {
      setScore(score + 1); // increments the score
      // adds the clicked id to the list of clicked ids
      setClickedEmoji((prevEmojis) => [
        ...prevEmojis,
        event.target.getAttribute("id"),
      ]);
    }
    shuffleArray(emojiArray);
  };

  useEffect(() => {
    console.log(clickedEmoji);
  }, [clickedEmoji]);

  useEffect(() => {
    if (score > highScore) {
      setHighscore(score);
    }
  }, [score]);

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Canvas emojiArray={emojiArray} buttonClick={buttonClick} />
    </>
  );
}

export default App;
