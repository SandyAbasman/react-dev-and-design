/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import Form from "./Form";

export const NameContext = createContext(null);

function Home() {
  const [name, setName] = useState("sandy");

  return (
    <div className="bg-gray-600 w-full h-auto p-10">
      <NameContext.Provider value={{ name, setName }}>
        <Form />
      </NameContext.Provider>
    </div>
  );
}

export default Home;
