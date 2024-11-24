import About from "./about.jsx";
import Contact from "./contact.jsx";
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
