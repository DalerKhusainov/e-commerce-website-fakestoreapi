// REACT ROUTER HOOKS
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// COMPONENTS PAGES
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";

// COMPONENTS
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// LAYOUT
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Sidebar />
      <Footer />
    </div>
  );
};

// CREATING ROUTES
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

const App = () => {
  return (
    <div className="overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
