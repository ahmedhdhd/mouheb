import React from "react";
import classes from "./navbar.module.css"
import { Link } from "react-router-dom";

function Navbar1() {
  return (
    
    <div className={classes.container}>
      
      <div>
      
      <div className={classes.buttons}>
      <img src="http://www.isimm.rnu.tn//storage/app/public/coordonnees/February2021/rW9i5gySgSLqZgilRuuF.png" alt="isimm"/>
      <button className={`${classes.profile} ${classes.btn}`} ><Link to="/profile">Profile</Link></button>
      <button className={`${classes.extranet} ${classes.btn}`}><Link to="/login">Espace Extranet</Link></button>
      </div>
      

    
    <header>

      <a href="#" className={classes.logo}>
        ISIMM
      </a>
      <div className={classes.menuToggle}></div>
      <nav>
        <ul>
          <li>
            <a href="#">Institue</a>
            <ul>
              <li>
                <a href="#">Isimm</a>
                <ul>
                  <li>
                    <Link to ="/presentation">Presentation</Link>
                    {/* <a href="#">Presentation</a> */}
                  </li>
                  <li>
                    <a href="#">Equipe</a>
                  </li>
                  <li>
                    <a href="#">Conseille scientifique</a>
                  </li>
                  <li>
                    <a href="#">Communité de qualité</a>
                  </li>
                  <li>
                    <a href="#">Bibliotheque</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Vie associative</a>
                <ul>
                  <li>
                    <a href="#">Associations</a>
                  </li>
                  <li>
                    <a href="#">Clubs</a>
                  </li>
                  <li>
                    <a href="#">Evenements </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Internationnale</a>
                <ul>
                  <li>
                    <a href="#">Offre de mobilité</a>
                  </li>
                  <li>
                    <a href="#">Partenariat Internationnale</a>
                  </li>
                  <li>
                    <a href="#">Projet Internationale </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Formation</a>
            <ul>
              <li>
                <a href="#">Cycle Ingenierue</a>
              </li>
              <li>
                <a href="#">license</a>
              </li>
              <li>
                <a href="#">Master</a>
              </li>
              <li>
                <a href="#">Prepa integre</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Recherche</a>
            <ul>
              <li>
                <a href="#">laboratoire de recherche</a>
              </li>
              <li>
                <a href="#">project de recherche</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Entreprise</a>
            <ul>
              <li>
                <a href="#">Offre de Stage</a>
              </li>
              <li>
                <a href="#">Offre d'emploit</a>
              </li>
              <li>
                <a href="#">Entreprises partenaire</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contactez nous</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
    </div>
  );
}

export default Navbar1;
