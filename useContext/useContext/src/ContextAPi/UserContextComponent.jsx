/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


//initialize  and export the create context hook
export const userContext = createContext();


//create a component returning the children props wraped in a context.provider and value 
//pass all the state needed through an about and add to the value
export default function UserContextComponent({ children }) {
  const [user, setUser] = useState("sandy");

  const contextValue = {
    user,
    setUser,
  };
  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
}
