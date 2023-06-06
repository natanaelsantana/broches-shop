import React from "react";

//Routers

//Principal components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/ProductList";



const Home = () => {
  return (
    <div>
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
