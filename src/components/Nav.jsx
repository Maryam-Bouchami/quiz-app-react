import { Link } from "react-router-dom";
import styles from "./nav.module.css";
export default function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/quiz.png" />
        <h1>Quiz App With React</h1>
      </div>
      <div>
        <Link className={styles.Link} to="/">
          Home Page{" "}
        </Link>
      </div>
    </div>
  );
}
