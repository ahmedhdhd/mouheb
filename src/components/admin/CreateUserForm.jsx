import React, { useState } from "react";
import axios from "axios";

const CreateUserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");

  const generatePassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let generatedPassword = "";
    for (let i = 0; i < 8; i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(generatedPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/user/save", {
        username,
        password,
        role,
        email,
      });
      const bodymail = `Username: ${username}, Password: ${password}`;
      await axios.get(`http://localhost:8080/send-email/${email}/${bodymail}`);

      setUsername("");
      setPassword("");
      setRole("student");
      setEmail("");

      alert("User created successfully and email sent!");
    } catch (error) {
      console.error("Error creating user or sending email:", error);
      alert("Error creating user or sending email. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-light">
              <h3 className="mb-0">Create User</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <div className="input-group">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={generatePassword}
                    >
                      Generate Password
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Role:</label>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="student"
                      value="student"
                      checked={role === "student"}
                      onChange={() => setRole("student")}
                      className="form-check-input"
                    />
                    <label htmlFor="student" className="form-check-label">
                      Student
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="teacher"
                      value="teacher"
                      checked={role === "teacher"}
                      onChange={() => setRole("teacher")}
                      className="form-check-input"
                    />
                    <label htmlFor="teacher" className="form-check-label">
                      Teacher
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Create User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserForm;
