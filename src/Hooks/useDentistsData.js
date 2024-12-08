import { useState, useEffect } from "react";

import { getUsers } from "../Helpers/api";

export const useDentistsData = () => {
  const [dentistsData, setDentistsData] = useState([]);

  const getDentistsData = async () => {
    const data = await getUsers();

    if (!data) return;

    setDentistsData(data);
  };

  useEffect(() => {
    getDentistsData();
  }, []);

  return dentistsData;
};
