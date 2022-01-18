import React from "react";

import 'normalize.css';
import './SubmitData.css'

import justMe from './assets/justme-image.png'
import shared from './assets/shared-img.png'
import folder from './assets/folder.png'

const SubmitData = () => {
  return <div >
      <div className="submitData">
      <form className="submitForm">
          <label class="custom-file-upload">
            <input type="file"/>
            +<br/>AÑADIR PROYECTO
          </label>
        <div className="nameAndType">
        <label className="name"> Nombre* </label>
          <label className="type"> Tipo </label>
        <input type='text'></input>
        <input type='text'></input>
        </div>
        <div id="ownerTitle" className="textStyle"> Titularidad del proyecto*</div>
        <div  className="proyectOwner">
        <label htmlFor="justMe">
          <img src={justMe}></img>
        </label>
        <label htmlFor="shared">
        <img src={shared}></img>
        </label>
        </div>
          <p className="textStyle">Ubicación</p>
          <div className="folderDirectory ">
            <div className="underline">
            <span><img src={folder}></img></span>
            <p>Nombre carpeta</p>
            </div>
          <button>+NUEVA</button>
          </div>
          <p className="textStyle">Añadir etiquetas</p>
          <div>
          <input type="text" placeholder="Tag nueva" className="tagInput"></input>
          </div>
          <button className="submitButton">SUBIR</button>
        </form>
      </div>
  </div>;
};

export default SubmitData;
