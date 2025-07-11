"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface QuizContextType {
  answers: number[];
  setAnswers: (answers: number[]) => void;
  resetAnswers: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext deve ser usado dentro do QuizProvider");
  }
  return context;
};

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswersState] = useState<number[]>([]);

  const setAnswers = (newAnswers: number[]) => {
    setAnswersState(newAnswers);
  };

  const resetAnswers = () => {
    setAnswersState([]);
  };

  return (
    <QuizContext.Provider value={{ answers, setAnswers, resetAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};
