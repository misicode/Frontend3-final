import React from "react";
import { useParams } from "react-router-dom";
import { useDentistData } from "../Hooks/useDentistData";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams();
  const dentistData = useDentistData(id);

  return (
    <>
      <h1>Detail Dentist N° {id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {
        (dentistData)
        ? (
          <div className="card-detail">
            <div>
              <p>Name:</p>
              <p>{dentistData.name}</p>
            </div>
            <div>
              <p>Email:</p>
              <p>{dentistData.email}</p>
            </div>
            <div>
              <p>Phone:</p>
              <p>{dentistData.phone}</p>
            </div>
            <div>
              <p>Address:</p>
              <p>{dentistData.address?.street} - {dentistData.address?.suite}, {dentistData.address?.city}</p>
            </div>
            <div>
              <p>Website:</p>
              <p>{dentistData.website}</p>
            </div>
          </div>
        )
        : null
      }
    </>
  );
};

export default Detail;
