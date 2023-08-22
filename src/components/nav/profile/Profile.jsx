import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

export default function Profile({ logout, user }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className={styles.profile}>
      <button className={styles.profileButton} onClick={toggleDropdown}>
        <CgProfile className={styles.profileIcon} />
        {user.name}
        <AiFillCaretDown />
      </button>

      {isDropdownOpen && (
        <ul className={styles.dropdown}>
          <li>
            <Link to="/clockin">Gestão de Ponto</Link>
          </li>
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        </ul>
      )}
    </div>
  );
}
