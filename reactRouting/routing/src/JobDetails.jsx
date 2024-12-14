import { useLoaderData } from "react-router-dom";

function JobDetails() {
  const data = useLoaderData();
  //   const { id } = useParams();

  console.log(data);
  return (
    <div>
      <div>
        <h1>{data.id}</h1>
        <p>{data.jobTitle}</p>
        <p>{data.location}</p>
      </div>
    </div>
  );
}

export default JobDetails;

export const jobDetails = async function ({ params }) {
  const { id } = params;
  const response = await fetch("http://localhost:4000/myData/" + id);

  if(!response.ok){
    throw Error("could not find the job detail")
  }
  return response.json();
};
