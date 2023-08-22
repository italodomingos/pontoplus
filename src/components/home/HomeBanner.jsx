import React from "react";
import Button from "../layout/Button";
import styles from "./HomeBanner.module.css";

export default function HomeBanner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1>Bem vindo ao Ponto+!</h1>
        <p>
          Acompanhe e gerencie eficientemente os registros de ponto da sua
          equipe
        </p>
      </div>
      <div>
        <Button text="Começar" to="/login" />
      </div>
    </div>
  );
}
