import React from 'react';
import { IssueOpenedIcon, IssueClosedIcon } from '@primer/octicons-react'
import "./Issue.css";
import axios from 'axios';

function Issue(props) {
  const {_id, text, isOpen, issueNumber, dateOpened, issueCreator, tags} = props;
  const handleDelete = () => {
    axios.delete(`/api/issues/delete-issue/${_id}`).then(res => console.log(res.data));
    window.location.href = "/";
  }
  const handleState = () => {
    axios.patch(`/api/issues/update-issue/${_id}`, {isOpen: !isOpen});
    window.location.href = "/";
  }
  return (
    <div className="issue">
      <div className="top">
        <div className="topLeft">
          {isOpen ? <IssueOpenedIcon size={24} /> : <IssueClosedIcon size={24} />}
          <span className="text">{text}</span>
          {tags.map((tag,id) => {
            return (
              <span key={id} className="tags" style={{"backgroundColor": tag.color}}>{tag.tagName}</span>
            );
          })}
        </div>
        <div className="topRight">
          <button className="btn remove-btn" onClick={handleDelete}>Delete</button>
          <button className="btn state-btn" onClick={handleState}>{isOpen ? "Close Issue" : "Reopen Issue"}</button>
        </div>
        
      </div>
      <div className="bottom">
        #{issueNumber} opened on {dateOpened} by <span className="issueCreator">{issueCreator}</span>
      </div>
    </div>
  )
}

export default Issue
