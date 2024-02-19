import React, { Component } from "react";

class Pdfman2 extends Component {
  componentDidMount() {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("enlaceDescargarPdf").click();
      window.close();
    }
  }

  render() {
    return (
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <object
          data={require("../documentos/manuales/MANUAL USUARIO ADMIN.pdf")}
          type="application/pdf"
          width="100%"
          height="100%">
          <br />
          <a
            href={require("../documentos/manuales/MANUAL USUARIO ADMIN.pdf")}
            id="enlaceDescargarPdf"
            download="Convocatoria.pdf">
            Tu dispositivo no puede visualizar los PDF, da click aquí para
            descargarlo
          </a>
        </object>
      </div>
    );
  }
}

export default Pdfman2;
