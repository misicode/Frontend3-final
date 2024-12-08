import axios from "axios";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return data;
  } catch (err) {
    console.error("Ocurrió un error. No se pudo obtener la lista de usuarios");
  }
}

export const getUserById = async (id) => {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return data;
  } catch (err) {
    console.error("Ocurrió un error. No se pudo obtener los datos del usuario");
  }
}