import React from "react";
import styles from "./ClockInHistory.module.css";

export default function ClockInHistory() {
  return (
    <div>
      <div className={styles.history}>
        <div className={styles.lineStart}></div>
        <p>Histórico de pontos</p>
        <div className={styles.lineEnd}></div>
      </div>
    </div>
  );
}
