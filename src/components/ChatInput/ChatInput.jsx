import React, { useState } from 'react';
import './chatinput.css'
export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="controls">
    <input className="message" value={message} onChange={handleInputChange} type="text" placeholder="Type a message ..." />
    <button onClick={handleSubmit} className="send">Исполнить</button>
    </div>
  );
}
