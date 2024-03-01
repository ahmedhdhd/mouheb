import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const MessageModule = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [messagess, setMessagess] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    try {
      await axios.post("http://localhost:8080/api/messages/save", {
        senderId: username,
        receiverId: "admin",
        message: messagess,
      });
      setMessagess("");
      fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/messages/bySenderId/${username}`
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll to bottom when messages change

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card col-md-6">
        <div className="card-header">
          <h2 className="mb-0">Messages</h2>
        </div>
        <div
          className="card-body p-0"
          style={{ overflowY: "auto", maxHeight: "300px" }}
        >
          {messages &&
            messages
              .sort((a, b) => a.id - b.id)
              .map((message) => (
                <div key={message.id} className="card my-2">
                  <div
                    className={`card-body ${
                      message.senderId === username
                        ? "bg-danger text-light"
                        : "bg-primary text-light"
                    } rounded-3`}
                  >
                    {message.message}
                  </div>
                </div>
              ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="card-footer">
          <form onSubmit={sendMessage} className="input-group">
            <input
              type="text"
              value={messagess}
              onChange={(e) => setMessagess(e.target.value)}
              className="form-control"
              placeholder="Enter your message"
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageModule;
