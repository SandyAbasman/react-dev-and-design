import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-screen h-auto bg-slate-800 text-white p-6 text-2xl flex flex-row justify-between items-center">
      <div>logo</div>
      <ul className="flex flex-row gap-4">
        <Link to={"./"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
