import Contact from "./contact.jsx";
import Home from "./Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import AboutLayout from "./AboutLayout.jsx";
import AboutAbas from "./AboutAbas.jsx";
import AboutSandy from "./AboutSandy.jsx";
import NotFound from "./NotFound.jsx";
import Jobslayout from "./jobslayout.jsx";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<AboutLayout />}>
          <Route path="abas" index element={<AboutAbas />} />
          <Route path="sandy" element={<AboutSandy />} />
        </Route>

        <Route path="contact" element={<Contact />} />

        <Route path="jobs" element={<Jobslayout />} loader ={data} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={myRouter} />
    </div>
  );
}


 export const data = async function (){
  const response = await fetch("http://localhost:4000/myData")
  return response.json()
}

export default App;