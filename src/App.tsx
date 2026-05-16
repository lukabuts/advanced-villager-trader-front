import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { router } from "@/routes";
import { APP_NAME } from "@/constants";
import { LoadingScreen, Modal, Notification } from "@/components/ui";

function App() {
  return (
    <>
      <Helmet defaultTitle={APP_NAME} />

      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
      </Suspense>
      <Notification />
      <Modal />
      <Analytics />
    </>
  );
}

export default App;
