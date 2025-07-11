"use client";
import { useState } from "react";
import { questions, dimensions } from "../../data/quizData";
import { interpretScore, analyzeDimensions } from "../../utils/iaUtils";
import QuestionList from "./questionList";
import ResultsReport from "./resultsReport";
import DimensionBreakdown from "./dimensionBreakdown";

export default function IAMaturityQuiz() {
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(1)
  );
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const totalScore = answers.reduce((a, b) => a + b, 0);
    setScore(totalScore);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(1));
    setScore(0);
    setSubmitted(false);
  };

  const scoreResult = interpretScore(score);
  const dimensionResults = analyzeDimensions(answers, dimensions);

  return (
    <div className="min-h-screen flex justify-center bg-gray-200 items-start p-8">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Questionário de Maturidade em IA
        </h1>

        {!submitted ? (
          <QuestionList
            questions={questions}
            answers={answers}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : (
          <>
            <ResultsReport score={score} result={scoreResult} />
            <DimensionBreakdown results={dimensionResults} />
            <button
              className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition"
              onClick={handleReset}
            >
              🔁 Refazer questionário
            </button>
          </>
        )}
      </div>
    </div>
  );
}
