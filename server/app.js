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

// Route for handling image uploads and creating a new user
// app.post("/api/v1/signup", upload.single("image"), async (req, res) => {
//   try {
//     const { fullname, username, email, phone } = req.body;
//     const image = req.file;

//     const newUser = new User({
//       fullname,
//       username,
//       email,
//       phone,
//       image: { data: image.buffer, contentType: image.mimetype },
//     });

//     // const savedUser = await newUser.save();

//     res.status(201).json({
//       message: "User registered successfully",
//       user: savedUser,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

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
