import { createContext, useContext, useEffect, useReducer } from "react";

export const initialState = {
  theme: localStorage.getItem("theme") || "light", 
  data: JSON.parse(localStorage.getItem("favs")) || []
}

export const ContextGlobal = createContext(undefined);

export const reducer = (state, action) =>{
  switch (action.type) {
    case "toogleTheme":
      const theme = state.theme === "light" ? "dark" : "light";
      document.body.className = theme;
      localStorage.setItem("theme", theme);
      return { ...state, theme: theme };
    case "addFav":
      const list = [...state.data, action.payload];
      localStorage.setItem("favs", JSON.stringify(list));
      return { ...state, data: list };
    case "removeFav":
      const newList = [...state.data].filter(item => item.id !== action.payload);
      localStorage.setItem("favs", JSON.stringify(newList));
      return { ...state, data: newList };
    default:
      throw new Error("The action required doesn't exist")
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.body.className = state.theme;
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const AppContext = () => useContext(ContextGlobal);