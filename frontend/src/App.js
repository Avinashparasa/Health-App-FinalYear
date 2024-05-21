import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//components and pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FootBar from "./components/FootBar";

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
        element: <Home />,
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
