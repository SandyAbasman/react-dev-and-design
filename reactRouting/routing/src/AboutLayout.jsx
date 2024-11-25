import { Outlet } from "react-router-dom";
import About from "./about";

export default function AboutLayout() {
  return (
    <div>
      <About />
      <Outlet />
    </div>
  );
}
