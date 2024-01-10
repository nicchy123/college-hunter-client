import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Hero from "./components/Hero/Hero";
import Signup from "./pages/Signup/Signup";
import { Toaster } from "react-hot-toast";
import Signin from "./pages/signin/Signin";
import PostDetails from "./pages/CollegeDetails/CollegeDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./pages/Admission/Admission";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Colleges from "./pages/Colleges/Colleges";
import Admission from "./pages/Admission/Admission";
import CollegeDetails from "./pages/CollegeDetails/CollegeDetails";
import Profile from "./pages/Profile/Profile";
import AdmitDetails from "./pages/AdmitDetails/AdmitDetails";
import MyCollege from "./pages/MyCollege/MyCollege";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/my-college",
          element: (
            <PrivateRoute>
              <MyCollege />
            </PrivateRoute>
          ),
        },
        {
          path: "/colleges",
          element: <Colleges />,
        },
        {
          path: "/admission",
          element: <Admission />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/colleges/:id",
          element: (
            <PrivateRoute>
              <CollegeDetails />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/colleges/${params.id}`),
        },
        {
          path: "/admit/:id",
          element: (
            <PrivateRoute>
              <AdmitDetails />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/colleges/${params.id}`),
        },

        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
