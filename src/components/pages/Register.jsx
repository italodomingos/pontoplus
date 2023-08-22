import styles from "./Login.module.css";
import ErrorForm from "../form/ErrorForm";
import { useRegister } from "../../customHooks/userCustomHook";

export default function Register({ setMessage }) {
  const { handleChange, handleSubmit, errors } = useRegister(setMessage);

  return (
    <div className={styles.containerLogin}>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        <div>
          <h1>Registrar</h1>
        </div>
        <div>
          <label htmlFor="name">Usuário:</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
          {errors.name && <ErrorForm text={errors.name} />}
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
          {errors.email && <ErrorForm text={errors.email} />}
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
          {errors.password && <ErrorForm text={errors.password} />}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar senha:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <ErrorForm text={errors.confirmPassword} />
          )}
        </div>
        <input className={styles.submitBtn} type="submit" value="Registrar" />
      </form>
    </div>
  );
}
