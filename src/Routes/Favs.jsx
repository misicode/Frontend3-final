import React from "react";
import Card from "../Components/Card";
import { AppContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const { state } = AppContext();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {
          state.data.map((item) => (
            <Card key={item.id} id={item.id} name={item.name} username={item.username} isFav={true} />
          ))
        }
      </div>
    </>
  );
};

export default Favs;
