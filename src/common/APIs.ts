import { Advice } from "../types/Advice";
import { BACKEND_URL } from "./Constants";

export const fetchAdviceList = async (): Promise<Advice[]> => {
  const response = await fetch(BACKEND_URL);
  const data = await response.json();
  return data;
};

export const postAdvice = async (advice: Advice): Promise<void> => {
  fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(advice),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success!");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
