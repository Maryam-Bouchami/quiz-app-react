import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <div className={styles.navbar}>
      <Link className={styles.Link} to="/">
        <div className={styles.logo}>
          <img src="/quiz.png" alt="Quiz Logo" />
          <h1>Quiz App With React</h1>
        </div>
      </Link>
    </div>
  );
}
