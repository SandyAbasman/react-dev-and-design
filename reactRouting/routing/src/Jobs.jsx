import { useLoaderData } from "react-router-dom";

import { Link } from "react-router-dom";

function Jobs() {
  const mydata = useLoaderData();

  return (
    <div>
      <h3>this are the available jobs</h3>
      {mydata.map(function (item, index) {
        return (
          <Link to={item.id.toString()} key={index}>
            <div className="border w-fit h-auto p-5 m-4">
              <h3>{item.jobTitle}</h3>
              <p>{item.location}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Jobs;
