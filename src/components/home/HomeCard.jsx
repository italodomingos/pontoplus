import styles from "./HomeCard.module.css";

export default function HomeCard({ header, text }) {
  return (
    <div className={styles.card}>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
}
