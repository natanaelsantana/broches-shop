import React from "react";
//import { BrowserRouter, Route } from "react-router-dom";

//Principal components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/ProductList";



const App = () => {
  return (

    <div>
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
