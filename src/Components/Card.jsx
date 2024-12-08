import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./utils/global.context";

const Card = ({ name, username, id, isFav }) => {
  const { state, dispatch } = AppContext();

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if(state.data.some(item => item.id === id)) {
      alert("The dentist is already in favorites");
      return;
    }

    const dentist = { id, name, username };
    dispatch({ type: "addFav", payload: dentist });
  };

  const removeFav = () => {
    dispatch({ type: "removeFav", payload: id });
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src="images/doctor.jpg" />
      <p>N° { id }</p>
      <p>{ name }</p>
      <p>{ username }</p>
      <div className="card-options">
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/dentist/${id}`}>
          See details
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {
          (isFav) 
          ? <button onClick={removeFav} className="favButton" title="REMOVE FAV">
              <svg
                  fill="currentColor"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 288.397 288.397"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M203.524,9.355c-22.569,0-43.743,8.976-59.325,24.197C128.617,18.331,107.443,9.355,84.873,9.355 C38.074,9.355,0,47.429,0,94.229c0,37.748,13.759,71.203,43.298,105.287c23.656,27.296,87.031,70.172,89.718,71.983l11.184,7.543 l11.184-7.543c2.687-1.812,66.061-44.688,89.718-71.983c29.539-34.084,43.297-67.54,43.297-105.287 C288.397,47.429,250.323,9.355,203.524,9.355z"></path>
                  </g>
              </svg>
            </button>
          : <button onClick={addFav} className="favButton" title="ADD FAV">
              <svg
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 288.199 288.199"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M203.325,9.256c-22.523,0-43.653,8.941-59.226,24.104C128.527,18.196,107.397,9.256,84.874,9.256 C38.074,9.256,0,47.33,0,94.129c0,37.746,13.758,71.201,43.299,105.288c23.655,27.295,87.03,70.171,89.717,71.983L144,278.809 v0.134l0.1-0.067l0.1,0.067v-0.134l10.984-7.409c2.687-1.813,66.062-44.688,89.717-71.983 c29.541-34.087,43.299-67.542,43.299-105.288C288.199,47.33,250.125,9.256,203.325,9.256z M214.673,173.22 c-13.887,16.025-49.144,42.159-70.573,57.227c-21.43-15.068-56.686-41.203-70.573-57.227C50.653,146.827,40,121.695,40,94.129 c0-24.743,20.131-44.873,44.874-44.873c17.736,0,31.308,6.595,45.492,21.881c4.708,5.074,12.32,15.429,13.634,17.227v0.273 c0,0,0.034-0.047,0.1-0.137c0.065,0.089,0.1,0.137,0.1,0.137v-0.273c1.314-1.798,8.925-12.153,13.634-17.227 c14.185-15.286,27.756-21.881,45.492-21.881c24.743,0,44.874,20.13,44.874,44.873C248.199,121.695,237.546,146.827,214.673,173.22z "></path>
                  </g>
                </g>
              </svg>
            </button>
        }
      </div>
    </div>
  );
};

export default Card;
