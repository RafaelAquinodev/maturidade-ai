"use client";
import { useQuizContext } from "../context/quizContext";
import { interpretScore, analyzeDimensions } from "../utils/iaUtils";
import { dimensions } from "../data/quizData";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ResultsReport from "./maturityQuizIa/resultsReport";
import DimensionBreakdown from "./maturityQuizIa/dimensionBreakdown";

export default function ResultsContent() {
  const { answers, resetAnswers } = useQuizContext();
  const router = useRouter();
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (answers.length === 0) {
      router.replace("/questions");
    } else {
      setScore(answers.reduce((a, b) => a + b, 0));
    }
  }, [answers, router]);

  if (answers.length === 0) return null;

  const scoreResult = interpretScore(score);
  const dimensionResults = analyzeDimensions(answers, dimensions);

  return (
    <>
      <ResultsReport score={score} result={scoreResult} />
      <DimensionBreakdown results={dimensionResults} />
      <button
        className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition"
        onClick={() => {
          resetAnswers();
          router.push("/questions");
        }}
      >
        🔁 Refazer questionário
      </button>
    </>
  );
}
