import React from "react";
import { useState, useEffect } from "react";
import "./header.scss";
import { HiDownload } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

function Header() {
  const [resolucion, setResolucion] = useState("");

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

          <p className="nav-link">Home</p>

          <p className="nav-link">About me</p>

          <p className="nav-link">Proyects</p>

          <p className="nav-link">Contact</p>
        </div>
        <div className="cv-container">
          {resolucion ? (
            <button>
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
