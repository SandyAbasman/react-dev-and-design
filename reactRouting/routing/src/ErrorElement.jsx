import { Link, useRouteError } from "react-router-dom";

export default function ErrorElement() {
  const error = useRouteError();
  return (
    <div>
      <h1>{error.message}</h1>

      <Link to={"/"}>
        <p>go to home</p>
      </Link>
    </div>
  );
}
