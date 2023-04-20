import { useEffect } from "react";
import Header from "./components/Header";
import Cart from "./pages/cart/Cart";
import CatProdect from "./pages/home/CatProdect";
import Details from "./pages/home/Details";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { cartTotalCalculate } from "./store/feachers/cartSlice";
import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useAppDispatch();
  const { cartItem } = useAppSelector((state) => state.cart);
  useEffect(() => {
    dispatch(cartTotalCalculate());
  }, [cartItem]);
  return (
    <Router>
      <Header />
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/catprodect/:category" element={<CatProdect />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
