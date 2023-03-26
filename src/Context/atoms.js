// IMPORTING MODULES
import { atom } from "recoil";

// STATE STORES
// STORES QUESTIONS
export const questionsAtom = atom({
  key: "questions",
  default: [],
});

// STORES DARK MODE STATE
export const darkModeAtom = atom({
  key: "darkMode",
  default: true,
});

// STORES MODAL TYPE STATE
export const modalTypeAtom = atom({
  key: "modalType",
  default: "",
});

// STORES CURRENT QUESTION NUMBER
export const currentQuestionAtom = atom({
  key: "currentQuestionAtom",
  default: 0,
});
