import { useNavigate } from "react-router-dom";
import UserServices from "../services/UserServices";
import { useState } from "react";
import checkInputs from "../helpers/checkInputs";

const useLogin = ({ setUser, setMessage }) => {
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    UserServices.login(e.target.email.value, e.target.password.value)
      .then((user) => {
        setUser(user);
        navigate("/clockin");
      })
      .catch((error) => {
        setMessage({ text: error.message, type: "error" });
      });
  }

  return { handleLogin };
};

const useRegister = (setMessage) => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(checkInputs(user));
    if (Object.keys(errors).length === 0) {
      UserServices.register(user)
        .then((response) => {
          setMessage({
            text: "Usuário cadastrado com sucesso. Agora, faça o login",
            type: "success",
          });
          navigate("/login");
        })
        .catch((error) => {
          setMessage({
            text: error.message,
            type: "error",
          });
        });
    }
  }
  return { handleChange, handleSubmit, errors };
};

export { useLogin, useRegister };
