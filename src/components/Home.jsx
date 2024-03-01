import "../App.css";
import Navbar from "./NavBar";
import Foter from "./Footer";
import Content from "./Content";
import React, { useState } from "react";
const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNavbarItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Navbar onItemClick={handleNavbarItemClick} />
      <Content selectedItem={selectedItem} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Foter />
    </div>
  );
};
export default Home;
