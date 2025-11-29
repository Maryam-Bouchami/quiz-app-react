import { useState } from "react";
import Question from "./Question";

export default function QuestionsList({ questions }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleAnswerChange(id, value, isCorrect) {
    setAnswers((prev) => ({
      ...prev,
      [id]: { value, isCorrect },
    }));
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <>
      <h3>Répondre au Quiz</h3>

      {questions.map((question, index) => (
        <Question
          key={index}
          question={{ ...question, id: index }}
          onAnswerChange={handleAnswerChange}
          answer={answers[index]}
          submitted={submitted}
        />
      ))}

      <button onClick={handleSubmit}>Envoyer</button>
    </>
  );
}
