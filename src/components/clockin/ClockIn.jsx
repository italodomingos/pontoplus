import React, { useEffect } from "react";
import ClockInHeader from "./header/ClockInHeader";
import styles from "./ClockIn.module.css";
import ClockInHistory from "./history/ClockInHistory";
import Table from "../layout/Table/Table";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import ClockinPopup from "./clockinPopup/ClockinPopup";
import axios from "axios";

export default function ClockIn({ setMessage }) {
  const columns = [
    {
      Header: "Horário",
      accessor: "horario",
    },
    {
      Header: "Aparelho",
      accessor: "aparelho",
    },
    {
      Header: "Canal",
      accessor: "canal",
    },
    {
      Header: "Modo",
      accessor: "modo",
    },
    {
      Header: "Comentário",
      accessor: "comentario",
    },
    {
      Header: "Comprovante",
      accessor: "comprovante",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0); // Página atual
  const itemsPerPage = 8; // Itens por página
  const [data, setData] = useState([]);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [customClass, setCustomClass] = useState();
  const [hidden, setHidden] = useState(false);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = data.slice(startIndex, endIndex);

  const user = JSON.parse(localStorage.getItem("user"));

  function handlePageChange({ selected }) {
    setCurrentPage(selected);
  }

  function togglePopup() {
    if (customClass) {
      setCustomClass(null);
    } else {
      setCustomClass("absolute");
    }
    setIsPopupVisible(!isPopupVisible);
    toggleHidden();
  }

  function toggleHidden() {
    setHidden(!hidden);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/clockin/${user.id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const newResponse = response.data.map((value) => {
          const date = new Date(value.horario);
          value.horario = date.toLocaleString().replace(",", " -");
          return value;
        });
        setData(newResponse);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.content + " " + styles[customClass]}>
      <div className={styles.popup}>
        {isPopupVisible && (
          <ClockinPopup
            togglePopup={togglePopup}
            toggleHidden={toggleHidden}
            setMessage={setMessage}
          />
        )}
      </div>
      <div disabled={hidden}>
        <h2>Bater ponto</h2>
        <ClockInHeader togglePopup={togglePopup} />
        <ClockInHistory />

        <Table columns={columns} data={itemsToShow} />

        <ReactPaginate
          pageCount={Math.ceil(data.length / itemsPerPage)} // Total de páginas
          pageRangeDisplayed={5} // Quantidade de páginas exibidas no seletor
          marginPagesDisplayed={2} // Margem de páginas exibidas antes e depois
          onPageChange={handlePageChange} // Função chamada ao mudar de página
          containerClassName={styles.pagination} // Classe do container do seletor
          activeClassName={styles.active} // Classe para a página atual
        />
      </div>
    </div>
  );
}
