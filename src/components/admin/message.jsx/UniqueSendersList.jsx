import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UniqueSendersList = () => {
  const [uniqueSenders, setUniqueSenders] = useState([]);
  const history = useHistory();

  const go = (username) => {
    history.push(`/AdminMessages/${username}`);
  };

  useEffect(() => {
    fetchUniqueSenders();
  }, []);

  const fetchUniqueSenders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/messages/all"
      );
      const messages = response.data;

      const uniqueSenderIds = [
        ...new Set(messages.map((message) => message.senderId)),
      ];

      setUniqueSenders(uniqueSenderIds);
    } catch (error) {
      console.error("Error fetching unique senders:", error);
    }
  };

  return (
    <div>
      <h2>Unique Senders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name of User</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {uniqueSenders.map((senderId) => (
            <tr key={senderId}>
              <td>{senderId}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => go(senderId)}
                >
                  Contact
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UniqueSendersList;
