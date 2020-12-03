import React from 'react';
import { GitPullRequestIcon, IssueOpenedIcon, CommentIcon } from '@primer/octicons-react'
import "./Issue.css";

function Issue(props) {
  const {text, isOpen, issueNumber, dateOpened, issueCreator, tags} = props;
  return (
    <div className="issue">
      <div className="top">
        <div className="topLeft">
          {isOpen ? <IssueOpenedIcon size={24} /> : <GitPullRequestIcon size={24} />}
          <span className="text">{text}</span>
          {/* {JSON.parse(tag).map(tag => {
            return (
              <span key={tag.tagName} className="tags" style={{ "backgroundColor": tag.color }}>{tag.tagName}</span>
            );
          })} */}
        </div>
        <CommentIcon size={24} className="topRight"/>
      </div>
      <div className="bottom">
        #{issueNumber} opened on {dateOpened} by <span className="issueCreator">{issueCreator}</span>
      </div>
    </div>
  )
}

export default Issue
