import "./side.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MessageModule from "./message/messageModule";
import { useParams } from "react-router-dom";
import ProfileModule from "./profile/ProfileModule";
import DownNote from "./Notestudent";
import ScheduleListStudent from "./ScheduleListStudent";

function SideStudent() {
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
  const returnProfileModule = () => {
    setSelectedItem(<ProfileModule username={username} />);
  };
  const { username } = useParams();

  const returnMessageModule = () => {
    setSelectedItem(<MessageModule username={username} />);
  };
  const returnNotestudent = () => {
    setSelectedItem(<DownNote username={username} />);
  };
  const returnScheduleListStudent = () => {
    setSelectedItem(<ScheduleListStudent username={username} />);
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
                <span className="nav_logo-name">Etudiant</span>
              </a>
              <div className="nav_list">
                <a href="#" className="nav_link active">
                  <i className="bx bx-grid-alt nav_icon"></i>
                  <span className="nav_name">Dashboard</span>
                </a>
                <a
                  href="#"
                  className="nav_link"
                  onClick={() => returnProfileModule()}
                >
                  <i className="bx bx-user nav_icon"></i>
                  <span className="nav_name">Infromation personnel</span>
                </a>
                <a
                  href="#"
                  className="nav_link"
                  onClick={() => returnMessageModule()}
                >
                  <i className="bx bx-message-square-detail nav_icon"></i>
                  <span className="nav_name">Contact admin</span>
                </a>
                <a
                  href="#"
                  className="nav_link"
                  onClick={() => returnNotestudent()}
                >
                  <i className="bx bx-bookmark nav_icon"></i>
                  <span className="nav_name">Resulat</span>
                </a>
                <a
                  href="#"
                  className="nav_link"
                  onClick={() => returnScheduleListStudent()}
                >
                  <i className="bx bx-folder nav_icon"></i>
                  <span className="nav_name">Empeloi de temps</span>
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
        <div>
          <h4>Main Components</h4>
          <br />
          <br />

          {selectedItem}
        </div>
        {/* main container middle area end */}
      </div>
    </div>
  );
}
export default SideStudent;
