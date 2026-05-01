import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { router } from "@/routes";
import { APP_NAME } from "@/constants";
import { LoadingScreen } from "@/components/ui";

function App() {
  return (
    <>
      <Helmet defaultTitle={APP_NAME} />

      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
