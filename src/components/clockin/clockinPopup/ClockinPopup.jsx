import React from "react";
import styles from "./ClockinPopup.module.css";
import axios from "axios";

export default function ClockinPopup({ togglePopup, setMessage }) {
  const user = JSON.parse(localStorage.getItem("user"));

  function clockin(e) {
    setMessage("");
    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/clockin",
        {
          aparelho: "desktop",
          canal: "navegador",
          modo: "individual",
          comentario: e.target.comentario.value,
          userId: user.id,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        togglePopup();
        setMessage({ text: "Ponto registrado com sucesso!", type: "success" });

        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className={styles.popup}>
      <div className={styles.popupHeader}>
        <h3>Bater seu ponto</h3>
        <button onClick={togglePopup}>X</button>
      </div>

      <form onSubmit={clockin}>
        <div className={styles.popupContent}>
          <p>Seu ponto só será validado após a confirmação.</p>
          <input
            type="text"
            placeholder="Comentário sobre este ponto"
            id="comentario"
          />
        </div>

        <div className={styles.popupButtons}>
          <button onClick={togglePopup}>Cancelar</button>
          <input type="submit" value="Confirmar" />
        </div>
      </form>
    </div>
  );
}
