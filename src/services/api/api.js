const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const User = require("../../db/models/User");
const Clockin = require("../../db/models/Clockin");
const sequelize = require("../../db/connection/db");

Clockin.belongsTo(User, { foreignKey: "userId" });
sequelize.sync();

app.use(cors());
app.use(express.json());

app.post("/user", async (req, res) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.status(201).json(newUser);
});

app.get("/user/:email", async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.params.email,
    },
  });

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "Usuário não encontrado" });
  }
});

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

app.post("/clockin", async (req, res) => {
  const newClockin = await Clockin.create({
    aparelho: req.body.aparelho,
    canal: req.body.canal,
    modo: req.body.modo,
    comentario: req.body.comentario,
    comprovante: req.body.comprovante,
    userId: req.body.userId,
  });

  res.status(201).json(newClockin);
});

app.get("/clockin/:userId", async (req, res) => {
  const clockin = await Clockin.findAll({
    where: {
      userId: req.params.userId,
    },
  });

  res.status(200).json(clockin);
});

app.get("/clockin", async (req, res) => {
  const clockin = await User.findAll({ include: Clockin });

  // const clockin = await Clockin.findOne({
  //   where: {
  //     UserId: "839a5f45-1b3d-4812-8f76-42a6872cb9b2",
  //   },
  // });

  res.status(200).json(clockin);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
