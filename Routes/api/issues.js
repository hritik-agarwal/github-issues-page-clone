const router = require("express").Router();

// get db model
const Issue = require("../../Models/Issue");

// GET all issues
router.get("/list-issues", (req, res) => {
  Issue.find()
  .sort({dateOpened: -1})
  .then(issues => res.json(issues))
  .catch(err => res.send(err));
});

// listing issues with given id
router.get("/list-issues/:issueId", (req, res) => {
  Issue.findById(req.params.issueId)
  .then((issue) => res.json(issue))
  .catch(() => res.json({ success: false }));
})

// adding issue
router.post("/add-issue", (req, res) => {
  const newIssue = new Issue(req.body);
  newIssue.save()
  .then(issue => res.json(issue))
  .catch(() => res.json({success:false}));
})

// updating issue with given id
router.patch("/update-issue/:issueId", (req, res) => {
  Issue.findByIdAndUpdate(req.params.issueId, req.body)
  .then((issue) => res.json(issue))
  .catch(() => res.json({ success: false }));
});

// deleting issue with given id
router.delete("/delete-issue/:issueId", (req, res) => {
  Issue.findByIdAndDelete(req.params.issueId)
  .then(() => res.json({success:true}))
  .catch(() => res.json({success: false}));
})

module.exports = router;