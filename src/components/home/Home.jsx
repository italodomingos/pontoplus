import React from "react";
import styles from "./Home.module.css";
import HomeBanner from "./HomeBanner";
import HomeCard from "./HomeCard";

export default function Home() {
  const cardContent = [
    {
      id: 1,
      header: "Registro Fácil",
      text: "Registre o ponto de forma rápida e intuitiva, eliminando a papelada.",
    },
    {
      id: 2,
      header: "Relatórios Detalhados",
      text: "Obtenha insights valiosos com relatórios detalhados sobre o horário de trabalho.",
    },
    {
      id: 3,
      header: "Configurações Flexíveis",
      text: "Personalize o sistema de acordo com as políticas de registro da sua empresa.",
    },
  ];

  return (
    <div className={styles.home}>
      <HomeBanner />
      <div className={styles.card}>
        {cardContent.map((content) => {
          return (
            <HomeCard
              header={content.header}
              text={content.text}
              key={content.id}
            />
          );
        })}
      </div>
    </div>
  );
}
