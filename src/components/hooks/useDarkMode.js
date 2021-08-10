import React from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const [values, setValues] = useLocalStorage("dark-mode", initialValue);
  return [values, setValues];
};

export default useDarkMode;
