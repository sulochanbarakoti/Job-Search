// server.js or multerConfig.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

// Storage configuration for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define the destination folder where uploaded files will be stored
    cb(null, "service/uploads/");
  },
  filename: (req, file, cb) => {
    // Define the filename for the uploaded file
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
