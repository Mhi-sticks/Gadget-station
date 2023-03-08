import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Contact from "./components/Contact";
import "react-toastify/dist/ReactToastify.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";
import Login from "./components/buttons/Login";
import Signup from "./components/buttons/Signup";
import ProfileScreen from "./components/ProfileScreen";
import PlaceOrderScreen from "./components/PlaceOrderScreen";
import OrderScreen from "./components/OrderScreen";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
