import { createContext, useReducer } from "react";
import data from "./data";

import CartReducer from "./Reducer/CartReducer";
const GlobalState = createContext();
const initState = [];
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initState);
  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
      },
    });
  };
  const deleteItem = (index) => {
    console.log(index);
    dispatch({
      type: "DELETE_ITEM",
      payload: index,
    });
  };
  return (
    <GlobalState.Provider value={{ data, state, addItem, deleteItem }}>
      {children}
      {console.log(state)}
    </GlobalState.Provider>
  );
};

export default GlobalState;
