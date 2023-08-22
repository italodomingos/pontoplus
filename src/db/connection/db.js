const Sequelize = require("sequelize");
const sequelize = new Sequelize("projeto-antonio", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
// try {
//   sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }
