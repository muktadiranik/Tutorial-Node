const express = require("express");
const app = express();
const multer = require("multer");
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connecting to database
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/upload");
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

// Creating schema and model
const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  path: {
    type: String,
    required: [true, "Path is required"],
  },
});

const fileModel = mongoose.model("file", fileSchema);

// multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, file.fieldname + "-" + name);
  },
});

const upload = multer({ storage: storage });

app.use("/", upload.single("file"), (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.post("/upload", upload.single("file"), (req, res) => {
  try {
    const file = new fileSchema({
      name: req.file.filename,
      path: req.file.filename,
    });
    file.save();
    res.status(200).send("File uploaded successfully");
  } catch {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectDB();
});
