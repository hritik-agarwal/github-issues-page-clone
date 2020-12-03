// Importing modules
require('dotenv').config();
const express = require("express");
const bodyPraser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

// Creating a express application named 'app'
const app = express();

// Setting backend port to be an environment variable or port 5000
const port = process.env.PORT || 5000;

// Setting up mongoose connection
mongoose.connect(process.env.URI,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on("connected", () => console.log("Connected to MongoDB Atlas"));

// Database Schema
const issueSchema = new mongoose.Schema({
  text: String,
  isOpen: Boolean,
  issueNumber: Number,
  dateOpened: {
    type: String,
    default: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
  },
  issueCreator: String,
  tags: Array
});

// Database Model
const Issue = mongoose.model('Issue', issueSchema);

// An application level middleware to print incoming requests
app.use((req, res, next) => {
  console.log(`Request_Endpoint : ${req.method} ${req.url}`);
  next();
})

// Body Parser Middleware Configuration
app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({ extended: true }));

// Cors Middleware Configuration
app.use(cors());

// Middleware to inform Express application to serve compiled react files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
}

// adding issue
app.post("/add-issue", (req, res)=>{
  const newIssue = new Issue(req.body);
  newIssue.save();
  res.send(req.body);
})

// listing issues with given id
app.get("/list-issues/:issueId", (req, res)=>{
  Issue.findById(req.params.issueId, (err, issue) => {
    if (err) res.send(err);
    else res.json(issue)
  })
})

// updating issue with given id
app.patch("/update-issue/:issueId", (req, res)=>{
  Issue.findByIdAndUpdate(req.params.issueId, req.body, (err, issue) => {
    if(err) res.json(err);
    else res.send(issue);
  })
});

// deleting issue with given id
app.delete("/delete-issue/:issueId", (req, res)=>{
  Issue.findByIdAndDelete(req.params.issueId, (err, issue)=>{
    if (err) res.json(err);
    else res.send(issue);
  });
})

// GET request based on page
app.get("/list-issues", (req, res) => {
  Issue.find().then(allIssues => res.send(allIssues)).catch(err => res.send(err));
});


// Configuring Server to listen on given port
app.listen(port, () => console.log(`BACKEND_SERVICE_PORT : ${port}`))