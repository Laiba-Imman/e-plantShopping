import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-card">
        <p className="eyebrow">About Paradise Nursery</p>

        <h1>Growing Happiness, One Plant at a Time</h1>

        <p>
          Paradise Nursery is an online plant shop created for people who
          want to bring the beauty of nature into their homes.
        </p>

        <p>
          We provide a variety of beautiful houseplants for beginners and
          experienced plant lovers. Our goal is to make plant shopping
          simple, friendly and enjoyable.
        </p>

        <div className="about-grid">
          <div>
            <h3>🌿 Our Mission</h3>
            <p>
              Make beautiful houseplants easy to discover and purchase.
            </p>
          </div>

          <div>
            <h3>🌱 Our Promise</h3>
            <p>
              Provide a simple shopping experience with clear plant details.
            </p>
          </div>

          <div>
            <h3>🏡 Our Vision</h3>
            <p>
              Help more homes become greener, calmer and more beautiful.
            </p>
          </div>
        </div>

        <Link className="primary-button" to="/plants">
          Explore Plants
        </Link>
      </section>
    </main>
  );
}