import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import { Helmet } from "react-helmet-async";
import { APP_NAME } from "./constants";

function App() {
  return (
    <>
      <Helmet defaultTitle={APP_NAME} />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
