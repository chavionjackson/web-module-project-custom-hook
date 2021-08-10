import React from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const [values, setValues] = useLocalStorage("dark-mode", initialValue);

  //Stretch
  function usePrefersDarkMode() {
    return ["(prefers-color-scheme: dark)"], [true], false;
  }

  const prefersDarkMode = usePrefersDarkMode();
  //

  return [values, setValues, prefersDarkMode];
};

export default useDarkMode;
