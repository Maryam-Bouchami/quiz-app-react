import QuestionsList from "../components/QuestionsList";
import { useLocation } from "react-router-dom";
import styles from "./quiz.module.css";
export default function Quiz() {
  const location = useLocation();
  const { questions } = location.state || { questions: [] };

  return (
    <div className={styles.quizBlock}>
      <QuestionsList questions={questions} />
    </div>
  );
}
