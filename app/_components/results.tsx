"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuizContext } from "../context/quizContext";
import { analyzeDimensions, interpretScore } from "../utils/iaUtils";
import ResultsReport from "../_components/maturityQuizIa/resultsReport";
import DimensionBreakdown from "../_components/maturityQuizIa/dimensionBreakdown";
import { dimensions } from "../data/quizData";

export default function ResultsPage() {
  const { answers, resetAnswers } = useQuizContext();
  const router = useRouter();
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (answers.length === 0) {
      router.replace("/");
    } else {
      setScore(answers.reduce((a, b) => a + b, 0));
    }
  }, [answers, router]);

  if (answers.length === 0) return <p>Carregando...</p>;

  const scoreResult = interpretScore(score);
  const dimensionResults = analyzeDimensions(answers, dimensions);

  return (
    <div className="min-h-screen flex justify-center items-start p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Resultado do Questionário
        </h1>

        <ResultsReport score={score} result={scoreResult} />
        <DimensionBreakdown results={dimensionResults} />

        <button
          className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition"
          onClick={() => {
            resetAnswers();
            router.push("/");
          }}
        >
          🔁 Refazer questionário
        </button>
      </div>
    </div>
  );
}
