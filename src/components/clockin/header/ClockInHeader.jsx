import React, { useEffect, useState } from "react";
import styles from "./ClockInHeader.module.css";

export default function ClockInHeader({ togglePopup }) {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = clock.getHours().toString().padStart(2, "0");
  const minutes = clock.getMinutes().toString().padStart(2, "0");
  const seconds = clock.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <div className={styles.header}>
      <p>{timeString}</p>
      <button onClick={togglePopup}>Bater ponto</button>
    </div>
  );
}
