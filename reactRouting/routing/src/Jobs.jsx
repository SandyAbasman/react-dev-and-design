import { useLoaderData } from "react-router-dom";
import data from "./App.jsx";

function Jobs() {
  const mydata = useLoaderData(data);
  return (
    <div>
      {mydata.map(function (item, index) {
        return (
          <div className="border w-fit h-auto p-5 m-4" key={index}>
            <h3>{item.firstname}</h3>
            <p>{item.lastname}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Jobs;
