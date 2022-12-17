const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port ${SERVER_PORT}`)
);

app.get("/", (req, res) => {
  res.status(200).send("This message is sent from the server.");
});
