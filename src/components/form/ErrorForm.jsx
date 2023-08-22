import styles from "./ErrorForm.module.css";

export default function ErrorForm({ text }) {
  return <p className={styles.error}>{text}</p>;
}
