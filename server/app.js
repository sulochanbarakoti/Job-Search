const express = require("express");
const connectDb = require("./db/connect");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

const start = async () => {
  try {
    await connectDb(process.env.MANGO_URL);
    //SERVER ON
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 3001");
    });
  } catch (error) {
    console.error(error);
  }
};

start();
