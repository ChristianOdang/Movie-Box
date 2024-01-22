import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import { useLoading } from "./context/LoadingContext";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

let router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movies/:id",
    element: <MoviePage />,
  },
]);

const App = () => {
  const isLoading = useLoading();

  console.log(isLoading);
  return (
    <>
      {isLoading && <Loader />}
      <RouterProvider router={router} />
    </>
  );
};

export default App;