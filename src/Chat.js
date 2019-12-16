import React, { Component } from 'react';

import MessagesList from './components/MessageList/MessageList';
import MessageForm from './components/MessageForm/MessageForm';

import './Chat.css';

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      users: [],
      list: [],
    }
  }

  createUser = () => {
    const { users, list } = this.state;
    const userId = Math.floor( Math.random() * ( 1000 - 10 + 1 ) ) + 10;

    users.push({
      userId: userId
    });

    this.setState(list);
  }
  
  handleSubmit = (e, text, id) => {
    e.preventDefault();

    const { list } = this.state;   

    if(list.length < 0) {
      return;
    }

    list.push({
      id: id,
      userName: `User ${id}`,
      messageText: text,
      date: new Date().toLocaleString()
    });

    this.setState(list);
  };

  render() {
    const { list, users } = this.state;

    return (
      <div className="chat">
        <header className="header">
          <h1>Chat</h1>
          <button onClick={this.createUser}>Add user</button>
        </header>
        <main className="chat-wrapper">
          {users.map(({ userId }) => (
            <div className="chat-component" key={userId}>
              <MessagesList list={list} indexField={userId}/>
              <MessageForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} id={userId}/>
            </div>
          ))}
        </main>


      </div>
    );
  };
}

export default Chat;
