import { useState } from "react";
import "./App.scss";
import Banner from "./components/Banner";
import CIrcleItem from "./components/CIrcleItem";
import Gnb from "./components/Gnb";
import Head from "./components/Head";
import NewItem from "./components/NewItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage";
import Insta from "./components/Insta";
import HitItem from "./components/HitItem";
import Blog from "./components/Blog";
import Foot from "./components/Foot";

const App = () => {
  const [cart, setCart] = useState([]);
  //장바구니에 리스트 추가
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const temp = prev.find((i) => i.id === item.id);
      let newItem = null;
      if (temp) {
        newItem = prev.map((j) => (j.id === item.id ? { ...j, count: j.count + 1 } : j));
      } else {
        newItem = [...prev, { ...item, count: 1 }];
      }
      return newItem;
    });
  };

  //cart item 삭제
  const handleDeleteCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter basename="/luckydory">
      <div id="App">
        <Head />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Gnb />
                <Banner />
                <CIrcleItem />
                <NewItem onAddCart={handleAddToCart} />
                <Insta />
                <Blog />
                <HitItem onAddCart={handleAddToCart} />
                <Foot />
              </>
            }
          />
          <Route path="/cart" element={<CartPage cart={cart} onDelete={handleDeleteCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;