import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-screen h-auto bg-slate-800 text-white p-6 text-2xl flex flex-row justify-between items-center">
      <NavLink to={"home"}>
        <div>logo</div>
      </NavLink>
      <ul className="flex flex-row gap-4">
        <NavLink to={"home"} index>
          <li> Home </li>
        </NavLink>
        <NavLink to={"about"}>
          <li> About </li>
        </NavLink>
        <NavLink to={"contact"}>
          <li> Contact </li>
        </NavLink>
        <NavLink to={"jobs"}>
          <li> Jobs</li>
        </NavLink>
      </ul>
    </div>
  );
}
