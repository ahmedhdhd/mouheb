import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const ScheduleListStudent = ({ username }) => {
  const [schedules, setSchedules] = useState([]);
  const [studentClass, setStudentClass] = useState(""); // State to hold student class

  useEffect(() => {
    fetchStudentClass(); // Fetch student class on component mount
    fetchSchedules(); // Fetch schedules on component mount
  }, []);

  const fetchStudentClass = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/student/${username}`
      );
      setStudentClass(response.data.studentClasses); // Set student class state with fetched data
    } catch (error) {
      console.error("Error fetching student class:", error);
    }
  };

  const fetchSchedules = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/schedules/all"
      );
      setSchedules(response.data); // Set schedules state with fetched data
    } catch (error) {
      console.error("Error fetching schedules:", error);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="container">
        <h2>Schedule List</h2>
        <div className="row">
          {schedules
            .filter((schedule) => schedule.className === studentClass) // Filter schedules by matching class name
            .map((schedule) => (
              <div key={schedule.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Class Name: {schedule.className}
                    </h5>
                    <p className="card-text">
                      Date Limit of Schedule: {schedule.dateSchedule}
                    </p>
                    {schedule.imageSchedule && (
                      <div>
                        <strong>Image:</strong>
                        <br />
                        <img
                          src={`data:image/jpeg;base64,${schedule.imageSchedule}`}
                          alt="Schedule"
                          className="card-img-top"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleListStudent;
