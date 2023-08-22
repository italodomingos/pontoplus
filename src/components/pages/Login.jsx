import styles from "./Login.module.css";
import { useLogin } from "../../customHooks/userCustomHook";

export default function Login({ setUser, setMessage }) {
  const { handleLogin } = useLogin({ setUser, setMessage });

  return (
    <div className={styles.containerLogin}>
      <form className={styles.formCard} onSubmit={handleLogin}>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" />
        </div>
        <input className={styles.submitBtn} type="submit" value="Entrar" />
      </form>
    </div>
  );
}
