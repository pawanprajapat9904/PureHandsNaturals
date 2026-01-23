import { createBrowserRouter } from "react-router-dom";
import App from "../App";

/* Pages */
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Address from "../pages/Address";
import CheckoutSuccess from "../pages/CheckoutSuccess";

/* Common */
import NotFound from "../components/common/NotFound";

/*
  Router structure:
  /               -> Home
  /products       -> Product list
  /product/:id    -> Product details
  /cart           -> Cart
  /address        -> Address
  /success        -> WhatsApp success page
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "products",
        element: <ProductList />
      },
      {
        path: "product/:id",
        element: <ProductDetails />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "address",
        element: <Address />
      },
      {
        path: "success",
        element: <CheckoutSuccess />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;
