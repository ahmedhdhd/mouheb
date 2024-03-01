import CreateUserForm from "./CreateUserForm";
import NoteForm from "./Note/NoteForm";
import NoteList from "./Note/NoteList";
import UserList from "./UserList";
import UniqueSendersList from "./message.jsx/UniqueSendersList";
import ScheduleForm from "./schedule/ScheduleForm";
import ScheduleList from "./schedule/ScheduleList";
import "./side.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Side() {
  const history = useHistory();

  //show sidebar of desktop (blue)
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      // toggle.addEventListener("click", () => {
      // show navbar
      nav.classList.toggle("showw");
      // change icon
      toggle.classList.toggle("bx-x");
      // add padding to body
      bodypd.classList.toggle("body-pd");
      // add padding to header
      headerpd.classList.toggle("body-pd");
      // });
    }
  };
  useEffect(() => {});
  const [selectedItem, setSelectedItem] = useState(null);
  const goout = () => {
    history.goBack();
  };
  const returnScheduleForm = () => {
    setSelectedItem(<ScheduleForm />);
  };

  const returnScheduleList = () => {
    setSelectedItem(<ScheduleList />);
  };
  const returnUniqueSendersList = () => {
    setSelectedItem(<UniqueSendersList />);
  };
  const returnNoteForm = () => {
    setSelectedItem(<NoteForm />);
  };
  const returnNoteList = () => {
    setSelectedItem(<NoteList />);
  };
  const returnCreateUserForm = () => {
    setSelectedItem(<CreateUserForm />);
  };
  const returnUserList = () => {
    setSelectedItem(<UserList />);
  };

  return (
    <div>
      <div>
        <header className="header" id="header">
          <div className="header_toggle">
            <i
              className="bx bx-menu laptop-menu-icon "
              onClick={() => {
                showNavbar("header-toggle", "nav-bar", "body-pd", "header");
              }}
              id="header-toggle"
            ></i>
            <i
              className="bx bx-menu mobile-menu-icon"
              data-bs-toggle="offcanvas"
              data-bs-target="#demo"
            ></i>
          </div>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
          </div>
        </header>

        {/* desktop  drawer start */}
        <div className="l-navbar" id="nav-bar">
          <nav className="nav">
            <div>
              <a href="#" className="nav_logo">
                <i className="bx bx-layer nav_logo-icon"></i>
                <span className="nav_logo-name">Administrateur</span>
              </a>
              <div className="nav_list">
                <a href="#" className="nav_link active">
                  <i className="bx bx-grid-alt nav_icon"></i>
                  <span className="nav_name">Dashboard</span>
                </a>
                <a
                  href="#"
                  className="nav_link"
                  onClick={() => returnCreateUserForm()}
                >
                  <i className="bx bx-user nav_icon"></i>
                  <span className="nav_name">Users</span>
                </a>
                <a
                  href="#"
                  className="nav_link"
                  onClick={() => returnUserList()}
                >
                  <i className="bx bx-user nav_icon"></i>
                  <span className="nav_name">Users</span>
                </a>
                <a
                  href="#"
                  className="nav_link"
                  onClick={() => returnUniqueSendersList()}
                >
                  <i className="bx bx-message-square-detail nav_icon"></i>
                  <span className="nav_name">Messages</span>
                </a>
                <a
                  href="#"
                  className="nav_link"
                  onClick={() => returnScheduleForm()}
                >
                  <i className="bx bx-calendar nav_icon"></i>
                  <span className="nav_name">Schedule</span>
                </a>
                <a
                  href="#"
                  className="nav_link"
                  onClick={() => returnScheduleList()}
                >
                  <i className="bx bx-calendar nav_icon"></i>
                  <span className="nav_name">Schedule</span>
                </a>
                <a
                  href="#"
                  className="nav_link"
                  onClick={() => returnNoteForm()}
                >
                  <i className="bx bx-note nav_icon"></i>
                  <span className="nav_name">Resultat </span>
                </a>
                <a
                  href="#"
                  className="nav_link"
                  onClick={() => returnNoteList()}
                >
                  <i className="bx bx-note nav_icon"></i>
                  <span className="nav_name">Resultat </span>
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-bar-chart-alt-2 nav_icon"></i>
                  <span className="nav_name">Stats</span>
                </a>
              </div>
            </div>
            <a href="#" className="nav_link" onClick={() => goout()}>
              <i className="bx bx-log-out nav_icon"></i>
              <span className="nav_name">SignOut</span>
            </a>
          </nav>
        </div>

        {/* desktop  drawer end */}

        {/* main container middle area start */}
        <div className="height-100 bg-light">
          <h4>Main Components</h4>
          <br />
          <br />

          {selectedItem}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* main container middle area end */}
      </div>
    </div>
  );
}
export default Side;
