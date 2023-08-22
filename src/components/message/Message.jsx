import React from "react";
import styles from "./Message.module.css";
import { useEffect, useState } from "react";

export default function Message({ text, type }) {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    if (!text) {
      setIsMessageVisible(false);
      return;
    }

    setIsMessageVisible(true);
    const timer = setTimeout(() => {
      setIsMessageVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      {isMessageVisible && (
        <div className={styles.message + " " + styles[type]}>
          <p>{text}</p>
        </div>
      )}
    </>
  );
}
