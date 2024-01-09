import React from "react";
import { Table, FormGroup, Input } from "reactstrap";
import "../bec.scss";

const Reg_hor = (props) => {
  return (
    <div id="main_content">
      <div className="tra">
        <div className="tra title-form">
          <h2 className>Registrar Horarios</h2>
        </div>
        <div id="subt">
          <span>
            <b>Instrucciones:</b> - Llena el formulario con tu horario de clases
            actual y sus debidos horarios.
            <br />- Tomar en cuenta el formato de la hora (AM/PM).
          </span>
        </div>

        <Table responsive="sm" id="tabl">
          <thead>
            <tr className="tr1">
              <th>Seleccionar Semestre, Gestión y Año Correspondiente:</th>
              <th>
                <FormGroup>
                  {/* <Label for="exampleSelect">Select</Label> */}
                  <Input id="exampleSelect" name="semestre" type="select">
                    <option>Primero</option>
                    <option>Segundo</option>
                    <option>Tercero</option>
                    <option>Cuarto</option>
                    <option>Quinto</option>
                    <option>Sexto</option>
                    <option>Septimo</option>
                    <option>Octavo</option>
                    <option>Noveno</option>
                    <option>Decimo</option>
                  </Input>
                </FormGroup>
              </th>
              <th>
                <FormGroup>
                  {/* <Label for="exampleSelect">Select</Label> */}
                  <Input id="exampleSelect" name="gestion" type="select">
                    <option>I-Semestre</option>
                    <option>II-Semestre</option>
                  </Input>
                </FormGroup>
              </th>
              <th colSpan={3}>
                <Input placeholder="Año" />
              </th>
            </tr>
            <tr className="text-center">
              <th>Materias</th>
              <th></th>
              <th>Días</th>
              <th colSpan={3}>Horas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input placeholder="Materia: 1" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 2" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 3" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 4" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 5" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 6" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 7" />
              </td>
              <td></td>
              <td>
                <Input placeholder="Lunes, Martes, Miércoles, Jueves, Viernes" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Reg_hor;
