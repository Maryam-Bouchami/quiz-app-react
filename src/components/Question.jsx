import { useState } from "react";
import styles from "../styles/question.module.css";

export default function Question({
  question,
  onAnswerChange,
  answer,
  submitted,
}) {
  const [choice, setChoice] = useState("");

  function verifyAnswer(selected) {
    setChoice(selected);
    const isCorrect = selected === question.correct;

    onAnswerChange(question.id, selected, isCorrect);
  }

  return (
    <div className={styles.questionBlock}>
      <h3>{question.qu}</h3>

      {[question.item1, question.item2, question.item3].map((item) => (
        <label key={item}>
          <input
            type="radio"
            name={`option-${question.id}`}
            value={item}
            checked={choice === item}
            onChange={(e) => verifyAnswer(e.target.value)}
            disabled={submitted} // optionnel : désactiver après envoi
          />
          {item}
        </label>
      ))}

      <p>Valeur sélectionnée : {choice}</p>

      {/* Afficher le résultat sous la question si soumis */}
      {submitted && answer && (
        <p style={{ color: answer.isCorrect ? "green" : "red" }}>
          {answer.isCorrect
            ? "✔️ Correct"
            : `❌ Incorrect (Réponse : ${question.correct})`}
        </p>
      )}
    </div>
  );
}
