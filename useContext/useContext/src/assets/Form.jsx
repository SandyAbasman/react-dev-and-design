/* eslint-disable react/prop-types */
import Name from "./Name";
import { useContext } from "react";
import { NameContext } from "./Home";

function Form() {
  const { name, setName } = useContext(NameContext);
  return (
    <div className="bg-red-400 w-full h-auto p-10">
      <Name />
      <p>my name is {name} </p>

      <button
        className=" p-1  text-white rounded-md mt-2 bg-black"
        onClick={() => setName(name === "sandy" ? "abas" : "sandy")}
      >
        change
      </button>
    </div>
  );
}

export default Form;
