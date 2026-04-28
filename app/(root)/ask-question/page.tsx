import React from "react";
import QuestionForm from "../../../components/forms/QuestionForm";

const AskQuestion = () => {
  return (
    <>
      <h1 className="h1-bold text-light100_dark900">Ask a question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </>
  );
};

export default AskQuestion;
