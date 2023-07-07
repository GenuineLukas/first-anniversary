import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/slider/slider";
import Virtual from "./components/Virtual/Virtual";
import Products from "./components/Products/Products";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  const [itemCount, setItemCount] = useState(3);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const [width, height] = windowSize;
    if (width > 800) {
      setItemCount(3);
    } else if (width > 600) {
      setItemCount(2);
    } else {
      setItemCount(1);
    }
  }, [windowSize, setItemCount]);

  useEffect(() => {
    console.log("itemCount", itemCount);
  }, [itemCount]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={[<Hero />, <Virtual />]} />
          <Route path="/slider" element={<Slider itemCount={itemCount} />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
