import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [messagess, setMessagess] = useState("");
  const { username } = useParams();

  const sendMessage = async (event) => {
    event.preventDefault(); // Prevent page refresh on form submission

    try {
      await axios.post("http://localhost:8080/api/messages/save", {
        senderId: "admin",
        receiverId: username,
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

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">Messages</h2>
            </div>
            <div
              className="card-body"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              {messages &&
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`card my-2 ${
                      message.senderId === username
                        ? "bg-danger text-light"
                        : "bg-primary text-light"
                    }`}
                  >
                    <div className="card-body rounded-3">{message.message}</div>
                  </div>
                ))}
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
      </div>
    </div>
  );
};

export default AdminMessages;
