import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import Container from "../layout/Container";
import Profile from "./profile/Profile";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  }

  return (
    <nav className={styles.navigator}>
      <Container>
        <div className={styles.logo}>
          <Link to="/">Ponto+</Link>
        </div>

        {user !== null ? (
          <div className="">
            <Profile logout={logout} user={user} />
          </div>
        ) : (
          <div className={styles.item}>
            <Link to="/login">Login</Link>
            <Link to="/register">Registrar</Link>
          </div>
        )}
      </Container>
    </nav>
  );
}
