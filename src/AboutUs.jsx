import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us-container">

      <h1>About Paradise Nursery</h1>

      <p>
        Paradise Nursery is an online plant shopping company
        that provides beautiful and healthy plants for homes,
        offices and gardens.
      </p>

      <p>
        Our mission is to make it easy for everyone to bring
        nature into their homes by providing a wide variety
        of quality plants at affordable prices.
      </p>

      <p>
        We offer air-purifying plants, tropical plants and
        succulent plants. We aim to provide customers with
        a simple, convenient and enjoyable online shopping
        experience.
      </p>

      <Link to="/plants" className="primary-button">
        Explore Plants
      </Link>

    </div>
  );
}

export default AboutUs;