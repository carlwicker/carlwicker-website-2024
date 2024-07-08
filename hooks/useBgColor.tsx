import { useState, useEffect } from "react";

export default function useBgColor() {
  // Step 1: Initialize state with a default dark color
  const [color, setColor] = useState("#000000");

  // Step 3: Function to generate a random dark color
  const generateDarkColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 20); // Keep lightness low for dark colors
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  useEffect(() => {
    // Step 2: Set up an interval
    const intervalId = setInterval(() => {
      // Update the color state with a new dark color
      setColor(generateDarkColor());
    }, 5000); // Change color every 5 seconds

    // Step 4: Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  // Step 5: Return the current color
  return color;
}
