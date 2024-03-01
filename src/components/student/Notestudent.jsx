import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import UploadService from "../admin/Note/file.service";
const DownNote = ({ username }) => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [fileInfos, setFileInfos] = useState([]);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [className, setClassName] = useState("");

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const studentResponse = await axios.get(
          `http://localhost:8080/api/student/${username}`
        );
        const className = studentResponse.data.studentClasses; // Assuming className is the property holding the class name
        setClassName(className);
      } catch (error) {
        console.error("Error fetching student information:", error);
      }
    };

    fetchStudentInfo();

    UploadService.getFiles().then((response) => {
      setFileInfos(response.data);
    });
  }, []);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const filterFilesByClassName = () => {
    if (!className) return [];

    // Filter fileInfos based on class name
    return fileInfos.filter((file) => file.includes(className));
  };

  return (
    <div>
      <div className="card">
        <div className="btn-group mx-auto">
          <h4 className="card-header">List des Notes</h4>
        </div>
        <ul className="list-group">
          {filterFilesByClassName().map((file, index) => (
            <a
              href={`http://localhost:8080/download/${file}`}
              className="list-group-item list-group-item-action"
              key={index}
            >
              <li>{file}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DownNote;
