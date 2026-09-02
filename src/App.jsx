import React, { useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";

import { useSelector } from "react-redux";

import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";


function Navbar() {

  const location = useLocation();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const showNavbar =
    location.pathname === "/plants" ||
    location.pathname === "/cart";

  if (!showNavbar) {
    return null;
  }

  return (
    <nav className="navbar">

      <Link to="/" className="brand">
        🌿 Paradise Nursery
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/plants">
          Plants
        </Link>

        <Link to="/cart">
          🛒 Cart ({totalItems})
        </Link>

      </div>

    </nav>
  );
}


function Home() {

  const [showProducts, setShowProducts] =
    useState(false);

  const navigate = useNavigate();


  const handleGetStarted = () => {

    setShowProducts(true);

    navigate("/plants");

  };


  if (showProducts) {

    return <ProductList />;

  }


  return (

    <main className="landing-page">

      <div className="landing-overlay">

        <section className="landing-content">

          <p className="eyebrow">
            Welcome to Paradise Nursery
          </p>

          <h1>
            Bring Nature Into Your Home
          </h1>

          <p>
            Discover beautiful houseplants for a
            greener, fresher and more peaceful home.
          </p>


          <button
            className="primary-button"
            onClick={handleGetStarted}
          >
            Get Started
          </button>


          <Link
            className="secondary-button"
            to="/about"
          >
            About Us
          </Link>

        </section>

      </div>

    </main>

  );
}


function App() {

  return (

    <>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/plants"
          element={<ProductList />}
        />

        <Route
          path="/cart"
          element={<CartItem />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />

      </Routes>

    </>

  );
}


export default App;