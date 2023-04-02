import React from 'react';
import { Container } from 'react-bootstrap';
import fondogalvUrl from "../../img/fondogal.png";
import clinica1Url from "../../img/clinica1.jpg";
import clinica2Url from "../../img/clinica2.jpg";
import clinica3Url from "../../img/clinica3.jpg";
import clinica6Url from "../../img/clinica6.jpg";
import clinica7Url from "../../img/clinica7.jpg";
import clinica8Url from "../../img/clinica8.png";

const Gallery = () => {
  return (
    <div style={{ position: "relative"}}>
      <img
        src={fondogalvUrl}
        alt="Fondo de Galeria"
      />
      <div style={{ marginTop: "100px" }}>
        <Container>
          <h1 className="mb-5">Galeria</h1>
          <div className="fusion-column col-lg-5 col-md-5 col-sm-5" style={{ marginTop: "20px", marginBottom: "50px" }}>
            <p>¡Bienvenidos a nuestra galería de Huellas PetCare! En nuestra clínica veterinaria, nos enorgullece no solo brindar atención médica excepcional a nuestras mascotas, sino también crear un ambiente cálido y acogedor donde se sientan seguros y felices. Aquí, hemos recopilado algunas fotos de nuestras instalaciones, para que puedan ver por sí mismos la calidad de lo que brindamos. Estamos aquí para asegurarnos de que todas las mascotas que ingresan por nuestras puertas se sientan como en casa. ¡Disfruten de nuestra galería y esperamos verlos pronto en nuestra clínica!</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={clinica2Url}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="clinica2"
              />
              <img
                src={clinica1Url}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="clinica1"
              />
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={clinica6Url}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="clinica6"
              />
              <img
                src={clinica3Url}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="clinica3"
              />
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={clinica7Url}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="clinica7"
              />
              <img
                src={clinica8Url}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="clinica8"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Gallery;
