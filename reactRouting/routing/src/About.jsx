import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h2> aboutpage</h2>
      <button
        onClick={() => navigate("sandy")}
        className=" border bg-gray-500 text-white p-2 mr-2 rounded-md"
      >
        goto AboutSandy
      </button>
      <button
        onClick={() => navigate("abas")}
        className="bg-black text-white p-2 rounded-md"
      >
        goto AboutAbas
      </button>
    </div>
  );
}

export default About;
