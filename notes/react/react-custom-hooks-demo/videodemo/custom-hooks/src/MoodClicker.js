import React, { useState } from "react";
import './MoodClicker.css';

const MoodClicker = () => {
  const [isHappy, setIsHappy] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMood = () => {
    setIsHappy(mood => !mood)
  }
  const toggleIsDarkMode = () => {
    setIsDarkMode(mode => !mode)
  }
  return (
    <div className={isDarkMode ? 'Clicker-dark' : 'Clicker-light'}>
      <h1>{isHappy ? '😀' : '😭'}</h1>
      <button onClick={toggleMood}>Change mood</button>
      <button onClick={toggleIsDarkMode}>Change dark or light mode</button>
    </div>

  )
}

export default MoodClicker;