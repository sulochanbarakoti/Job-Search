const express = require("express");
const cors = require("cors");
const connectDb = require("./db/connect");
require("dotenv").config();
const path = require("path");

const app = express();
const route = require("./routes/route");
app.use("/service", express.static(path.join(__dirname, "service")));

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1", route);

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
