import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
  Root,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  );
}

// function App() {
//   return (
//     <AuthWrapper>
//       <BrowserRouter>
//         <Navbar />
//         <Sidebar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:id" element={<SingleProduct />} />
//           {/*
//           <PrivateRoute path="/checkout" element={<Checkout />} />
//           */}
//           <Route path="/" element={<Error />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </AuthWrapper>
//   );
// }

export default App;
