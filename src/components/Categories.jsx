import { useNavigate } from "react-router-dom";
import questionsLitt from "../quiz-litteraire.json";
import questionsHist from "../quiz-historique.json";
import styles from "./category.module.css";
export default function Categories({ setQuestions }) {
  const navigate = useNavigate();

  const handleCategory = (questionsData) => {
    setQuestions(questionsData); // Met à jour l'état dans Homepage
    navigate("/quiz", { state: { questions: questionsData } }); // Va sur /quiz
  };

  return (
    <div className={styles.quizCategories}>
      <button onClick={() => handleCategory(questionsLitt)}>Littérature</button>
      <button onClick={() => handleCategory(questionsHist)}>Histoire</button>
    </div>
  );
}
