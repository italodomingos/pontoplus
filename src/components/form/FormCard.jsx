// import styles from "./FormCard.module.css";

export default function FormCard() {
  return (
    <form>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <label htmlFor="user">Usuário</label>
        <input type="text" id="user" />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" />
      </div>
      <input type="submit" value="Entrar" />
    </form>
  );
}
