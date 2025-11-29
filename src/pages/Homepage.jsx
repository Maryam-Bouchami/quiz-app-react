import { useState } from "react";

import Categories from "../components/Categories";

export default function Homepage() {
  const [questions, setQuestions] = useState([]);

  return (
    <div>
      <Categories questions={questions} setQuestions={setQuestions} />
    </div>
  );
}
