import React from "react";

const Profile = ({ student }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Profile</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">
                Personal Information
              </h5>
              <p className="fs-5 mb-3">
                <strong>Nom:</strong> {student.nom}
              </p>
              <p className="fs-5 mb-3">
                <strong>Prénom:</strong> {student.prenom}
              </p>
              <p className="fs-5 mb-3">
                <strong>Age:</strong> {student.age}
              </p>
              <p className="fs-5 mb-3">
                <strong>Email:</strong> {student.email}
              </p>
              <p className="fs-5 mb-3">
                <strong>Classe:</strong> {student.studentClasses}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
