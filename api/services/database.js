const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USERNAME,
  process.env.POSTGRES_PASSWORD,
  {
    //this is the container name on the docker-compose because of the networks linking
    host: "api-db",
    dialect: "postgres",
    port: process.env.POSTGRES_PORT,
  }
);

module.exports = {
  sequelize,
};
