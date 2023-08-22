function checkEmail(email) {
  return /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function checkInputs(user) {
  const errors = {};

  if (!user.name) {
    errors.name = "Usuário é obrigatório";
  }

  if (!user.email) {
    errors.email = "Email é obrigatório";
  } else if (!checkEmail(user.email)) {
    errors.email = "Por favor, insira um email válido";
  }

  if (!user.password) {
    errors.password = "A senha é obrigatória";
  } else if (user.password.length < 7) {
    errors.password = "A senha não pode ter menos que 7 caracteres";
  }

  if (!user.confirmPassword) {
    errors.confirmPassword = "A confirmação de senha é obrigatória";
  } else if (user.confirmPassword !== user.password) {
    errors.confirmPassword = "As senhas não são as mesmas";
  }

  return errors;
}

export default checkInputs;
