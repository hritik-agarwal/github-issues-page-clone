import React, { useState, useEffect } from 'react';
import Issue from "./Issue"

function IssuesList({issueslist}) {

  const [issues, setIssues] = useState([]);

  useEffect(() => {
    setIssues(issueslist);
  }, [issueslist]);

  return (
    <div>
      <div className="issuesList">
        {issues.map(issue => {
          return (
            <Issue
              _id={issue._id}
              key={issue._id}
              text={issue.text}
              isOpen={issue.isOpen}
              issueNumber={issue.issueNumber}
              dateOpened={issue.dateOpened}
              issueCreator={issue.issueCreator}
              tags={issue.tags}
            />
          );
        })};
      </div>
      <div></div>
    </div>
  )
}

export default IssuesList
