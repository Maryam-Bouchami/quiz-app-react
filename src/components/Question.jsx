import { useState } from "react";
export default function Question({ question }) {
  const [choice, setChoice] = useState("");
  return (
    <div>
      <h3>{question.qu}:::</h3>

      <label>
        <input
          type="radio"
          name="option"
          value={question.item1}
          checked={choice === question.item1}
          onChange={(e) => setChoice(e.target.value)}
        />
        {question.item1}
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="option"
          value={question.item2}
          checked={choice === question.item2}
          onChange={(e) => setChoice(e.target.value)}
        />
        {question.item2}
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="option"
          value={question.item3}
          checked={choice === question.item3}
          onChange={(e) => setChoice(e.target.value)}
        />
        {question.item3}
      </label>

      <p>Valeur sélectionnée : {choice}</p>
    </div>
  );
}
