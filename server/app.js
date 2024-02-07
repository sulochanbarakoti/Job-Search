const express = require("express");
const cors = require("cors");
const connectDb = require("./db/connect");
require("dotenv").config();
const multer = require("multer");

const app = express();
const route = require("./routes/route");

//middleware
app.use(cors());
app.use(express.json());

// Multer configuration for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use("/api/v1", upload.single("image"), route);
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
