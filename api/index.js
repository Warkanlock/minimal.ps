const express = require("express");
const { sequelize } = require("./services/database.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.status(200).json({
    data: "Communication succesfully stablish with the server.",
  });
});

app.get("/authenticate", async (req, res) => {
  try {
    const result = await sequelize.authenticate();
    res.status(200).json({
      data: result,
    });
  } catch (er) {
    res.status(500).json({
      error: er,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server connected on port ${process.env.PORT}`);
});
