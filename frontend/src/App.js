import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//components and pages
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FootBar from "./components/FootBar";
import SingleWorkout from "./pages/SingleWorkout";
import ErrorPage from "./pages/ErrorPage";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";

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
    errorElement: <ErrorPage />,
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
      {
        path: "/user/register",
        element: <UserRegister />,
      },
      {
        path: "/user/login",
        element: <UserLogin />,
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
