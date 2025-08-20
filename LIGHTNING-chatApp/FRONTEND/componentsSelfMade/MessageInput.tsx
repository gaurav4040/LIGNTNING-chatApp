import React, { useState, ChangeEvent } from 'react';
import { Socket } from 'socket.io-client';

interface MessageInputProps {
  socket: Socket;
}

const MessageInput: React.FC<MessageInputProps> = ({ socket }) => {
  const [message, setMessage] = useState<string>('');

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', message);
      setMessage('');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="message-input-container">
      <label htmlFor="messageInput" className="sr-only">
        Type a message
      </label>
      <input
        id="messageInput"
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message..."
        aria-label="Message input"
      />
      <button 
        onClick={sendMessage}
        aria-label="Send message"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;