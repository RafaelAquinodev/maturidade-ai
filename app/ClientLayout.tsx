"use client";
import { QuizProvider } from "./context/quizContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QuizProvider>{children}</QuizProvider>;
}
