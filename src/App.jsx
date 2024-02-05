import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
     <Routes>
      <Route index element={<Navigate to="/products" />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/*" element={<PageNotFound />} />
     </Routes> 
  );
};

export default App;