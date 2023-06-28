import { useEffect, useState } from "react";

const darkModeDetector = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.matches);
    };

    setIsDarkMode(darkModeQuery.matches);

    darkModeQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  return isDarkMode;
};

export default darkModeDetector;
