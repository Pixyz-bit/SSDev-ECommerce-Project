import { HomePage } from "./pages/home/HomePage";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { ErrorPage } from "./pages/ErrorPage";
function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product"); //"?expand=product" = query parameter
      setCart(response.data);
    };
    fetchAppData();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} /> {/*:orderId/:productId = URL Parameters*/}
        <Route path="*" element={<ErrorPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
