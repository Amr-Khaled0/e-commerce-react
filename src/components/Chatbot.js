import React, { useState, useEffect } from 'react';
import { BsChatRightText } from 'react-icons/bs';
import {AiOutlineSend ,AiOutlineClose} from 'react-icons/ai';
import '../ChatbotIcon.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', message: 'Hello! How can I help you today? :)' }, // Default message
  ]);
  const [botResponse, setBotResponse] = useState(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add the user's message to the messages array
    setMessages([...messages, { sender: 'user', message: inputMessage }]);

    // Simulate a bot response (replace this with your actual bot logic)
    setTimeout(() => {
      setBotResponse({ sender: 'bot', message: 'We will send you soon :) ' });
    }, 1000);

    // Clear the input field
    setInputMessage('');
  };

  useEffect(() => {
    // When a bot response is received, add it to the messages array
    if (botResponse) {
      setMessages([...messages, botResponse]);
      setBotResponse(null); // Reset botResponse after adding it
    }
  }, [botResponse, messages]);

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <BsChatRightText className='text-xl text-white ' />
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            Chatbot
            <button className="close-button" onClick={toggleChatbot}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="chatbot-content">
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`chat-message ${message.sender}`}
                >
                  {message.message}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
              className='w-3'
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={handleInputChange}
              />
              <button onClick={handleSendMessage}><AiOutlineSend /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
