import { Outlet } from "react-router-dom";
import Jobs from "./jobs";

function Jobslayout() {
  return (
    <div>
      <h3>this are the available jobs</h3>
      <Jobs />
      <Outlet />
    </div>
  );
}

export default Jobslayout;
