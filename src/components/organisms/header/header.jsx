import React from "react";
import { useState, useEffect } from "react";
import "./header.scss";
import { HiDownload } from "react-icons/hi";

function Header() {
  const [resolucion, setResolucion] = useState("");

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/img/cv.jpg';
    downloadLink.download = 'cv.jpg';
    downloadLink.click();
  };


  useEffect(() => {
    function actualizarResolucion() {
      const anchoVentana = window.innerWidth;
      if (anchoVentana > 480) {
        setResolucion(true);
      } else {
        setResolucion(false);
      }
    }
    actualizarResolucion();
    window.addEventListener("resize", actualizarResolucion);
  });

  return (
    <div className="header-container-full">
      <div className="header-container">
        <div className="nav-links-container">
          <p className="name">Carlos Hernandez</p>

          <p className="nav-link">About me</p>

          <p className="nav-link">Skills</p>

          <p className="nav-link">Proyects</p>

          <p className="nav-link">Contact</p>
        </div>
        <div className="cv-container">
          {resolucion ? (
            <button onClick={handleDownload}>
              Descargar cv <HiDownload />
            </button>
          ) : (
            <button>
              cv <HiDownload />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
