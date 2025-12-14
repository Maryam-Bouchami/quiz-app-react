import { useNavigate } from "react-router-dom";
import questionsLitt from "../data/quiz-litterature.json";
import questionsHist from "../data/quiz-history.json";
import questionPsy from "../data/quiz-psychology.json";
import questionsScience from "../data/quiz-science.json";
import styles from "../styles/category.module.css";
export default function Categories({ setQuestions }) {
  const navigate = useNavigate();

  const handleCategory = (questionsData) => {
    setQuestions(questionsData); // Met à jour l'état dans Homepage
    navigate("/quiz", { state: { questions: questionsData } }); // Va sur /quiz
  };

  return (
    <div className={styles.quizCategories}>
      <button onClick={() => handleCategory(questionsLitt)}>Litterature</button>
      <button onClick={() => handleCategory(questionsHist)}>History</button>
      <button onClick={() => handleCategory(questionPsy)}>Psychology</button>
      <button onClick={() => handleCategory(questionsScience)}>Science</button>
    </div>
  );
}
