import { useState, useEffect } from "react";

const TypeAnimation = ({ words, speed }) => {
  const [displayedWordIndex, setDisplayedWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(" ");

  useEffect(() => {
    let currentIndex = 0;
    let currentWord = words[displayedWordIndex];
    let isDeleting = false;
    const intervalId = setInterval(() => {
      setDisplayedWord(currentWord.substring(0, currentIndex) || " ");
      if (isDeleting) {
        currentIndex--;
      } else {
        currentIndex++;
      }
      if (currentIndex > currentWord.length) {
        isDeleting = true;
      }
      if (currentIndex < 0) {
        currentIndex = 0;
        isDeleting = false;
        setDisplayedWordIndex((displayedWordIndex + 1) % words.length);
        currentWord = words[displayedWordIndex];
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [words, speed, displayedWordIndex]);

  return <span>I know: {displayedWord}</span>;
};

export default TypeAnimation;
