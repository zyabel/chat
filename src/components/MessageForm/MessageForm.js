import React, { useState }  from 'react';

import './MessageForm.css';

const MessageForm = ({ handleSubmit, id }) => {
  const [ message, setMessage ] = useState('');

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const resetButton = (e) => {
    handleSubmit(e, message, id);
    setMessage('');
  };

  return (
    <div className="form-block">
      <form onSubmit={(e) => resetButton(e)}>
        <input 
          onChange={(e) => onChange(e)}
          value={message}
          placeholder="Text your message and press Enter"
          type="text"
        />
      </form>
    </div>
  );
};

export default MessageForm;