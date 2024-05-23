import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//components and pages
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FootBar from "./components/FootBar";
import SingleWorkout from "./pages/SingleWorkout";

const AppComponent = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FootBar />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/allworkout",
        element: <Home />,
      },
      {
        path: "/allworkout/:id",
        element: <SingleWorkout />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
