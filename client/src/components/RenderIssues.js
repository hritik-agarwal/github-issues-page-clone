// Necessary imports
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

// Component and CSS imports
import "./renderIssues.css";
import IssuesList from './IssuesList';


function RenderIssues() {

  // State Varaibales
  const [issueList, setIssueList] = useState(null);
  const [filter, setFilter] = useState("showAll");
  const [currentPage, setCurrentPage] = useState(1);
  const [newIssueText, setNewIssueText] = useState('');
  const [newIssueCreator, setNewIssueCreator] = useState('');

  // To handle filter, page button & new issue form
  const handleChange = (e) => setFilter(e.target.value);
  const handlePageChange = e => setCurrentPage(Number(e.target.innerHTML));
  const handleNewIssueText = e => { setNewIssueText(e.target.value) };
  const handleNewIssueCreator = e => { setNewIssueCreator(e.target.value) };
  const handleNewIssue = e => {
    e.preventDefault();
    const newIssue = {
      issueNumber: issueList[issueList.length - 1].issueNumber + 1,
      text: newIssueText,
      issueCreator: newIssueCreator,
      isOpen: true,
      tags: []
    }
    axios.post('/api/issues/add-issue', newIssue)
    .then(() => {
      alert("Issue added :)");
      window.location.reload();
    })
    .catch(() => alert("Could not add new issue"));
    setNewIssueText('');
    setNewIssueCreator('');
    window.location.href = "/";
  }

  // to be run at start to fetch all issues
  useEffect(() => {
    axios.get('/api/issues/list-issues')
    .then(res => { setIssueList(res.data)})
    .catch(err => console.log(err));
  },[])

  let totalIssues, issuesPerPage, maxPages, pageNumbers=null, indexOfFirstIssue, indexOfLastIssue;
  if(issueList !== null){
    // setting pagination
    totalIssues = issueList.length;
    issuesPerPage = 8;
    maxPages = (totalIssues + issuesPerPage - 1) / issuesPerPage;
    pageNumbers = []; for (let i = 1; i <= maxPages; i++) pageNumbers.push(i);

    // First and Last Issue on each page
    indexOfLastIssue = currentPage * issuesPerPage;
    indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  }

  return (

    <div className="renderIssues">
      
      <Router>

        <div className="header">
          <div className="issuesHeader">
            <Link to="/" className="btn newIssue">Issues List</Link>
            <Link to="/newIssue" className="btn newIssue">New Issue</Link>
          </div>
        </div>

        <Switch>

          <Route exact path="/newIssue">
            <div>
              <form className="newIssueForm" onSubmit={handleNewIssue}>
                <legend>Issue Name</legend>
                <input type="text" value={newIssueText} onChange={handleNewIssueText}></input>
                <legend>Type Your Name</legend>
                <input type="text" value={newIssueCreator} onChange={handleNewIssueCreator}></input>
                <legend>Choose Tag</legend>
                <button className="formBtn">Submit</button>
              </form>
            </div>
          </Route>

          <Route path="/">

            <div className="issuesHeader">
              <div className="filter">
                <select value={filter} onChange={handleChange} className="btn">
                  <option value="showAll">Show All</option>
                  <option value="isOpen">isOpen</option>
                  <option value="isClosed">isClosed</option>
                </select>
              </div>
            </div>

            {issueList === null ? <div className="issuesHeader">Loading ...</div> : (
              issueList.length === 0 ? <p>No Issue Available</p> : (
                <IssuesList issueslist={issueList.filter(issue => {
                  if (filter === "showAll") return issue;
                  if (filter === "isOpen" && issue.isOpen === true) return issue;
                  if (filter === "isClosed" && issue.isOpen === false) return issue;
                }).slice(indexOfFirstIssue, indexOfLastIssue)} />
              )
            )}

            <div className="pagination">
              <ul>
                {pageNumbers === null ? '' : (
                  pageNumbers.map(number => {
                    return (
                      <li key={number} className={number === currentPage ? "active" : ""} onClick={handlePageChange}>{number}</li>
                    );
                  })
                )}
              </ul>
            </div>

          </Route>

        </Switch>

      </Router>

    </div>
  )
}

export default RenderIssues