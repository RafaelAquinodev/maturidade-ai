"use client";

import { Toaster } from "react-hot-toast";
import { QuizProvider } from "./context/quizContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuizProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "14px",
            borderRadius: "8px",
          },
          success: {
            style: {
              background: "#22c55e",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#ef4444",
              color: "#fff",
            },
          },
        }}
      />
      {children}
    </QuizProvider>
  );
}
