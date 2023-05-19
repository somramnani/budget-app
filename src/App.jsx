import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { dashboardLoader } from "./pages/Main";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: dashboardLoader,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
