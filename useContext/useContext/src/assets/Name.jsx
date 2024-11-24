import { useContext } from "react";
import { NameContext } from "./Home";

function Name() {
  const { name, setName } = useContext(NameContext);

  return (
    <div className="bg-lime-600 p-10 text-white font-bold w-full h-auto text-center">
      <p>{name}</p>
      <button
        className=" p-1 rounded-md mt-2 bg-black"
        onClick={() => setName(name === "sandy" ? "abas" : "sandy")}
      >
        change
      </button>
    </div>
  );
}

export default Name;
