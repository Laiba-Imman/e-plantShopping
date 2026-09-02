import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const products = [
  // AIR PURIFYING PLANTS

  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    price: 18,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2c4b?auto=format&fit=crop&w=700&q=80",
    description: "A hardy and low-maintenance indoor plant."
  },

  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    price: 22,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80",
    description: "An elegant plant with beautiful white flowers."
  },

  {
    id: 3,
    name: "Spider Plant",
    category: "Air Purifying Plants",
    price: 16,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80",
    description: "An easy-care plant with long green leaves."
  },

  {
    id: 4,
    name: "Areca Palm",
    category: "Air Purifying Plants",
    price: 28,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80",
    description: "A tropical-looking palm for your indoor space."
  },

  {
    id: 5,
    name: "Rubber Plant",
    category: "Air Purifying Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=700&q=80",
    description: "A beautiful plant with large glossy leaves."
  },

  {
    id: 6,
    name: "ZZ Plant",
    category: "Air Purifying Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1614594575831-5b8e3e6b2a4b?auto=format&fit=crop&w=700&q=80",
    description: "A resilient houseplant that needs little attention."
  },

  // TROPICAL PLANTS

  {
    id: 7,
    name: "Monstera",
    category: "Tropical Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1614594895309-8e4f3a4c6a6e?auto=format&fit=crop&w=700&q=80",
    description: "A tropical statement plant with split leaves."
  },

  {
    id: 8,
    name: "Calathea",
    category: "Tropical Plants",
    price: 24,
    image: "https://images.unsplash.com/photo-1597055181300-3f37e8d5e0b0?auto=format&fit=crop&w=700&q=80",
    description: "A decorative plant with beautiful patterned foliage."
  },

  {
    id: 9,
    name: "Bird of Paradise",
    category: "Tropical Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=700&q=80",
    description: "A dramatic tropical plant with large leaves."
  },

  {
    id: 10,
    name: "Philodendron",
    category: "Tropical Plants",
    price: 23,
    image: "https://images.unsplash.com/photo-1615800002234-05c4d488696c?auto=format&fit=crop&w=700&q=80",
    description: "A popular tropical plant with heart-shaped leaves."
  },

  {
    id: 11,
    name: "Alocasia",
    category: "Tropical Plants",
    price: 27,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80",
    description: "A striking plant with large arrow-shaped leaves."
  },

  {
    id: 12,
    name: "Croton",
    category: "Tropical Plants",
    price: 21,
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=80",
    description: "A colorful tropical plant with vibrant foliage."
  },

  // SUCCULENT PLANTS

  {
    id: 13,
    name: "Aloe Vera",
    category: "Succulent Plants",
    price: 14,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80",
    description: "An easy-care succulent with fleshy leaves."
  },

  {
    id: 14,
    name: "Jade Plant",
    category: "Succulent Plants",
    price: 15,
    image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=80",
    description: "A compact succulent with thick rounded leaves."
  },

  {
    id: 15,
    name: "Echeveria",
    category: "Succulent Plants",
    price: 12,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80",
    description: "A beautiful rosette-shaped succulent."
  },

  {
    id: 16,
    name: "Haworthia",
    category: "Succulent Plants",
    price: 13,
    image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=700&q=80",
    description: "A small striped succulent perfect for desks."
  },

  {
    id: 17,
    name: "String of Pearls",
    category: "Succulent Plants",
    price: 19,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80",
    description: "A trailing succulent with bead-like leaves."
  },

  {
    id: 18,
    name: "Zebra Haworthia",
    category: "Succulent Plants",
    price: 17,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80",
    description: "A compact striped succulent with a unique appearance."
  }
];

const categories = [
  "Air Purifying Plants",
  "Tropical Plants",
  "Succulent Plants"
];

export default function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <main className="plants-page">
      <section className="page-heading">
        <p className="eyebrow">Paradise Nursery Collection</p>

        <h1>Find Your Perfect Houseplant</h1>

        <p>
          Explore our collection of beautiful houseplants.
        </p>
      </section>

      {categories.map((category) => (
        <section className="category-section" key={category}>
          <div className="category-heading">
            <h2>{category}</h2>
          </div>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => {
                const added = isInCart(product.id);

                return (
                  <article className="product-card" key={product.id}>
                    <img
                      className="product-image"
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="product-info">
                      <span className="category-label">
                        {product.category}
                      </span>

                      <h3>{product.name}</h3>

                      <p>{product.description}</p>

                      <div className="product-bottom">
                        <strong>
                          ${product.price.toFixed(2)}
                        </strong>

                        <button
                          className="add-button"
                          disabled={added}
                          onClick={() =>
                            dispatch(addToCart(product))
                          }
                        >
                          {added ? "Added ✓" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}