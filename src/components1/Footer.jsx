import React from 'react'
import classes from './footer.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.containerdetails}
      >
        <img src="http://www.isimm.rnu.tn//storage/app/public/coordonnees/May2023/h9yHIjJIzIg9AcCXBsOJ.png" alt="isimm log" className={classes.logo}/>
        <div className={classes.details}>
          <span>Adresse:</span>Avenue de la Corniche,<br/> Monastir 5000 Tunisie<br/>
          <span>Téléphone:</span>+216 70 011 920 <br/>
          <span>email:</span>webmaster@isimm.rnu.tn
        </div>
      </div>

      <div className={classes.containerlinks}>
        
        <div className={classes.containerlinks1}
        >
          <b>Institue</b>
          <ul className={classes.links}>
            <li><Link  style={{textDecoration:'none',color:'white'}} to ="">Decouvrire l'isimm</Link></li>
            <li><Link  style={{textDecoration:'none',color :'white'}} to =""> Clubs</Link></li>
            <li><Link  style={{textDecoration:'none',color :'white'}} to =""> Evenements</Link></li>
            <li><Link  style={{textDecoration:'none',color :'white'}} to =""> Partenariat international</Link></li>
          </ul>
        </div>
        <div className={classes.containerlinks1}
        >
          <b>Formation</b>
          <ul className={classes.links}>
            <li><Link style={{textDecoration:'none',color :'white'}} to ="">Prépa Integreé</Link></li>
            <li><Link  style={{textDecoration:'none',color :'white'}} to ="">License</Link></li>
            <li><Link  style={{textDecoration:'none',color :'white'}} to ="">Master</Link></li>
            <li><Link  style={{textDecoration:'none',color :'white'}} to ="">Cycle Ingenierie</Link></li>
          </ul>
        </div>
        <div className={classes.containerlinks1}
        >
          <b>Recherche</b>
          <ul className={classes.links}>
            <li><Link  style={{textDecoration:'none',color :'white'}} to ="">Laboratire de recheche</Link></li>
            <li><Link  style={{textDecoration:'none',color :'white'}} to ="">Projet de recherche</Link></li>
          </ul>
        </div>
        <div className={classes.containerlinks1}
        >
          <b>Entrepise</b>
          <ul className={classes.links}>
            <li><Link  style={{textDecoration:'none',color :'white'}} to ="">Offre de stage</Link></li>
            <li><Link  style={{textDecoration:'none',color :'white'}} to ="">Offre d'emploie</Link></li>
            <li><Link  style={{textDecoration:'none',color :'white'}} to ="">Entreprise partenaire</Link></li>
          </ul>
        </div>

        <div className={classes.containerlinks1}
        >
          <b><li><Link  style={{textDecoration:'none',color :'#3621c4',alignSelf:"center",fontWeight: "bold",}} to ="">Contactez nous</Link></li></b>
        </div>

      </div>
      
    </div>
  )
}
