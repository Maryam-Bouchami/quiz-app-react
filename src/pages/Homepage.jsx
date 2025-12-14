import { useState } from "react";

import Categories from "../components/Categories";
import "../styles/home.css";
export default function Homepage() {
  const [questions, setQuestions] = useState([]);

  return (
    <div className="homeContainer">
      <Categories questions={questions} setQuestions={setQuestions} />
    </div>
  );
}
