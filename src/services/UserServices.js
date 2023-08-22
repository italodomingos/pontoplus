import axios from "axios";

const UserServices = {
  login: async function (email, password) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          "http://localhost:3001/user/" + email,

          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          if (response.data.password === password) {
            localStorage.setItem(
              "user",
              JSON.stringify({ ...response.data } || null)
            );

            resolve({ ...response.data } || null);
          } else {
            reject(new Error("Senha inválida"));
          }
        })
        .catch((error) => {
          console.log(error);
          reject(new Error("Usuário não encontrado"));
        });
    });
  },

  register: async function ({ name, email, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          "http://localhost:3001/user",
          {
            name: name,
            email: email,
            password: password,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          resolve("Cadastrado com sucesso");
        })
        .catch((error) => {
          reject(
            new Error(
              "Não foi possivel fazer o cadastro. Tente novamente mais tarde"
            )
          );
        });
    });
  },
};

export default UserServices;
