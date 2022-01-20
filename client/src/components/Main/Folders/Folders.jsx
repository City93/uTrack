import React from "react";

// Importamos los componentes que vayamos a necesitar
import Nav from '../../Head/Nav'
import Topnav from '../../Head/TopNav'

// Importamos los iconos
import  moreIcon from "./assets/images/moreIcon.png";

// Importamos el archico CSS y normalize
import './Folders.css'
import 'normalize.css'

const Folders = () => {
  return <div>

    <Topnav/>

    <h2 className="foldersH2">Carpetas</h2>

    <div className="div-total-new">
      <p className="div-total-new-p">10 en total</p>
      <button className="div-total-new-button">+ NUEVA</button>
    </div>

    <div className="div-container">
      <div className="div-branding-images">
        <div className="div-branding-images-a"></div>
        <div className="div-two-images">
          <div className="div-branding-images-b"></div>
          <div className="div-branding-images-b"></div>
        </div>
      </div>
      <div className="div-branding-information">
        <div className="div-branding-information-left">
          <h4 className="div-branding-information-left-h4">Branding</h4>
          <p className="div-branding-information-left-p">4 archivos</p>
        </div>
        <div className="div-branding-information-icon">
          <img src={moreIcon} className="div-branding-moreIcon" alt="moreIcon" />
        </div>
      </div>
    </div>

    <div className="div-container">
      <div className="div-branding-images">
        <div className="div-branding-images-a"></div>
        <div className="div-two-images">
          <div className="div-branding-images-b"></div>
          <div className="div-branding-images-b"></div>
        </div>
      </div>
      <div className="div-branding-information">
        <div className="div-branding-information-left">
          <h4 className="div-branding-information-left-h4">Ilustración</h4>
          <p className="div-branding-information-left-p">12 archivos</p>
        </div>
        <div className="div-branding-information-icon">
          <img src={moreIcon} className="div-branding-moreIcon" alt="moreIcon" />
        </div>
      </div>
    </div>

    <Nav/>
    </div>;
};

export default Folders;
