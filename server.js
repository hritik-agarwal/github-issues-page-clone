// Importing modules
require('dotenv').config();
const express = require("express");
const bodyPraser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

// Importing routes
const issues = require("./Routes/api/issues");

// Creating a express application named 'app'
const app = express();
app.use(cors());
app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({ extended: true }));

// Database Connection
const db = require("./config/keys").mongoURI;
mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.log(err));

app.use("/api/issues", issues);

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build'));
});

// Setting backend port to be an environment variable or port 5000 and listening
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`BACKEND_SERVICE_PORT : ${port}`))
