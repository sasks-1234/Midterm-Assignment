import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Cart from "./Component/Cart";
import Category from "./Component/Category";
import CategoryProduct from "./Component/CategoryProduct";
import LoginPage from "./Component/RegisterForm";
import Heartitem from "./HeartItem/Heartitem";
import RegisterForm from "./Component/RegisterForm";
import Mainpage from "./Pages/Mainpage";
import Login from "./Pages/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category" element={<Category />} />
          <Route path="myproduct/:category" element={<CategoryProduct />} />
          <Route path="/heartitem" element={<Heartitem />} />
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
