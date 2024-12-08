import React from "react";
import Card from "../Components/Card";

import { useDentistsData } from "../Hooks/useDentistsData";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const dentistsData = useDentistsData();

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {
          (dentistsData)
          ? dentistsData.map((item) => (
              <Card key={item.id} id={item.id} name={item.name} username={item.username} />
            ))
          : null
        }
      </div>
    </main>
  );
};

export default Home;
