import React, { useState } from "react";

const ProfileForm = ({ username }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [studentClasses, setstudentClasses] = useState(""); // State for class name

  const onSave = (data) => {
    fetch("http://localhost:8080/api/student/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((savedStudent) => console.log("Student saved:", savedStudent))
      .catch((error) => console.error("Error saving student:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ nom, prenom, age, email, studentClasses, username }); // Include className in the saved data
    setNom("");
    setPrenom("");
    setAge("");
    setEmail("");
    setstudentClasses(""); // Reset className state after form submission
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="nom" className="form-label">
          Nom:
        </label>
        <input
          type="text"
          className="form-control"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="prenom" className="form-label">
          Prénom:
        </label>
        <input
          type="text"
          className="form-control"
          id="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="className" className="form-label">
          Class Name:
        </label>
        <select
          className="form-select"
          id="className"
          value={studentClasses}
          onChange={(e) => setstudentClasses(e.target.value)}
        >
          <option value="">Select Class</option>
          {/* Add options for class names */}
          <option value="Class A">Class A</option>
          <option value="Class B">Class B</option>
          <option value="Class C">Class C</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default ProfileForm;
