import React from "react";
import QuestionForm from "@/components/QuestionForm";

export default function AskQuestionPage() {
  return (
    <div className="container mx-auto px-4 pb-20 pt-36 max-w-2xl">
      <h1 className="mb-8 text-3xl font-bold">Ask a Question</h1>
      <QuestionForm />
    </div>
  );
}