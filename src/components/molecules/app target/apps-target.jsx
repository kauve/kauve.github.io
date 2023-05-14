import React from "react";
import "./apps-target.scss";

function AppsTarget({titulo,descripcion,img}) {
  return (
    <div className="container-app-target">
      <div className="foto">
        <p className="titulo">{titulo}</p>
        <img src={img} alt="none" />
      </div>
      <div className="content">
        <p className="descripcion">
         {descripcion}
        </p>
        <div className="containers-button">
          <button className="job"> See job </button>
          <button className="code"> See code </button>
        </div>
      </div>
    </div>
  );
}

export default AppsTarget;
