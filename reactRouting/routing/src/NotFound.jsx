import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="border mt-2 mx-2 p-2 rounded-md bg-black text-white"
        onClick={() => navigate("/")}
      >
        Go to homePage
      </button>
      <div className="mt-40 mx-[50%]">
        <h1 className="text-8xl">404</h1>
      </div>
    </>
  );
}
