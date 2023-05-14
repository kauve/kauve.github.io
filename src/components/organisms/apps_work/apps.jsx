import React from "react";
import "./apps.scss";
import AppsTarget from "../../molecules/app target/apps-target";


function AppsWork() {
  const apps = [
    {
      id: 1,
      titulo: "Personal Portfolio",
      descripcion:"Personal portfolio! Explore my creative work in Front-End develop, featuring projects developed with React.js. Discover interactive web designs and innovative applications that showcase my passion for this technology. Enjoy exploring my work and my search for job opportunities in React.js!",
      imagen: '/img/portfolio.png',
    },
    {
      id: 2,
      titulo: "Pharmek 2",
      descripcion:"Pagina web for Pharmek SAC Laboratories, using HTML5, CSS3 y Javascript.",
      imagen: '/img/pharmek.png',
    },
    {
      id: 3,
      titulo: "Pharmek",
      descripcion:"Pagina web for Pharmek SAC Laboratories, using HTML5, CSS3 y Javascript.",
      imagen: '/img/pharmek.png',
    },
  ];

  const listaApps = apps.map((apps) => {
    return (
      <AppsTarget
        key={apps.id}
        titulo={apps.titulo}
        descripcion={apps.descripcion}
        img={apps.imagen}
      />
    );
  });

  return (
    <div className="apps-container-full">
      <div className="apps-container">
        <h2 className="subtittle">Apps I've Built</h2>
        <p className="description">
          Here you can have a look to my deployed projects also the repos are
          available.
        </p>
        <div className="apps-target-container">{listaApps}</div>
      </div>
    </div>
  );
}

export default AppsWork;
