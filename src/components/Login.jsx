import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8080/api/auth/login/${username}/${password}`
      );

      const { message, role } = response.data;

      console.log(message);

      if (role === "student") {
        history.push(`/SideStudent/${username}`);
        setLoggedIn(true);
      } else if (role === "enseignant") {
        history.push("/EnseignantDashboard");
        setLoggedIn(true);
      } else if (role === "admin") {
        history.push("/SideAdmin");
        setLoggedIn(true);
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      {" "}
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card col-md-8 no-hover">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src="./unnamed.png"
                className="img-fluid rounded-start"
                alt="Placeholder"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 class="card-title">Login Space</h5>

                {loggedIn ? (
                  <div>
                    <p>Welcome to the student or teacher space!</p>
                  </div>
                ) : (
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                    {errorMessage && (
                      <p className="mt-3 text-danger">{errorMessage}</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
