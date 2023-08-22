const pontos = [
  {
    horario: "14/08/2023 18:42:14",
    aparelho: "desktop",
    canal: "navegador",
    modo: "Individual",
    comentario: "saída",
    comprovante: "Indiponivel",
  },
];

const teste = pontos.map((ponto) => {
  return Object.keys(ponto).map((key) => {
    console.log(ponto[key]);
    return ponto[key];
  });
});

console.log(teste);
