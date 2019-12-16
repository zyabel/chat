import React  from 'react';

import './MessageList.css';

const MessageList = ({ list, indexField }) => {
  
  return (
    <ul className="message-list">
      {list.map(({ userName, messageText, date, id }, index) => (
        <li className="message-list-item" key={index} style={{justifyContent: indexField === id  ? "flex-end" : "flex-start"}}>
          <div className="message">
            <h4 className="message-name">{userName}</h4>
            <p className="message-text" style={{backgroundColor: indexField !== id  ? "green" : "brown" }}>{messageText}</p>
            <p className="message-date">{date}</p>
          </div>
        </li>
      ))}
    </ul> 
  );
};

export default MessageList;