import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.Link}>
        <div className={styles.logo}>
          <img src="/quiz.png" alt="Quiz App Logo" />
          <h1>Quiz App</h1>
        </div>
      </Link>
    </nav>
  );
}
