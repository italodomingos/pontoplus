import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button({ text, to }) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
}
