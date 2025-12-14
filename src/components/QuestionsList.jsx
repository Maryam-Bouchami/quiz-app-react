import { useState } from "react";
import Question from "./Question";
import styles from "../styles/questionsList.module.css";
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
      {questions.map((question, index) => (
        <Question
          key={index}
          question={{ ...question, id: index }}
          onAnswerChange={handleAnswerChange}
          answer={answers[index]}
          submitted={submitted}
        />
      ))}

      <button className={styles.submitQuiz} onClick={handleSubmit}>
        Send
      </button>
    </>
  );
}
