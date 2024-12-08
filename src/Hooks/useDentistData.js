import { useState, useEffect } from "react";

import { getUserById } from "../Helpers/api";

export const useDentistData = (id) => {
  const [dentistData, setDentistData] = useState(null);

  const getDentistData = async () => {
    const data = await getUserById(id);

    if (!data) return;

    setDentistData(data);
  };

  useEffect(() => {
    getDentistData();
  }, [dentistData]);

  return dentistData;
};
