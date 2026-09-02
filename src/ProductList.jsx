import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";


const products = [

  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    price: 18,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    price: 22,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 3,
    name: "Spider Plant",
    category: "Air Purifying Plants",
    price: 16,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 4,
    name: "Areca Palm",
    category: "Air Purifying Plants",
    price: 28,
    image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 5,
    name: "Rubber Plant",
    category: "Air Purifying Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 6,
    name: "ZZ Plant",
    category: "Air Purifying Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1632207691144-2e9e6f9c8f45?auto=format&fit=crop&w=600&q=80"
  },


  {
    id: 7,
    name: "Monstera",
    category: "Tropical Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 8,
    name: "Calathea",
    category: "Tropical Plants",
    price: 24,
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 9,
    name: "Bird of Paradise",
    category: "Tropical Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1597055181300-0e2c4f4b5b2b?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 10,
    name: "Philodendron",
    category: "Tropical Plants",
    price: 23,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 11,
    name: "Alocasia",
    category: "Tropical Plants",
    price: 27,
    image: "https://images.unsplash.com/photo-1597055181449-2e6e3f0b7f2b?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 12,
    name: "Croton",
    category: "Tropical Plants",
    price: 21,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },


  {
    id: 13,
    name: "Aloe Vera",
    category: "Succulent Plants",
    price: 14,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 14,
    name: "Jade Plant",
    category: "Succulent Plants",
    price: 15,
    image: "https://images.unsplash.com/photo-1523434350862-6f0ebc6e5b5d?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 15,
    name: "Echeveria",
    category: "Succulent Plants",
    price: 12,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 16,
    name: "Haworthia",
    category: "Succulent Plants",
    price: 13,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 17,
    name: "String of Pearls",
    category: "Succulent Plants",
    price: 19,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 18,
    name: "Zebra Haworthia",
    category: "Succulent Plants",
    price: 17,
    image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80"
  }

];


function ProductList() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );


  const handleAddToCart = (product) => {

    dispatch(addItem(product));

  };


  const isInCart = (id) => {

    return cartItems.some(
      (item) => item.id === id
    );

  };


  const categories = [
    "Air Purifying Plants",
    "Tropical Plants",
    "Succulent Plants"
  ];


  return (

    <main className="products-page">

      <div className="products-header">

        <h1>Our Plants</h1>

        <p>
          Choose from our beautiful collection
          of houseplants.
        </p>

      </div>


      {categories.map((category) => (

        <section
          key={category}
          className="category-section"
        >

          <h2>{category}</h2>


          <div className="product-grid">

            {products
              .filter(
                (product) =>
                  product.category === category
              )
              .map((product) => {

                const added =
                  isInCart(product.id);


                return (

                  <div
                    className="product-card"
                    key={product.id}
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />


                    <div className="product-info">

                      <h3>
                        {product.name}
                      </h3>

                      <p className="product-price">
                        ${product.price}
                      </p>


                      <button
                        className="primary-button"
                        onClick={() =>
                          handleAddToCart(product)
                        }
                        disabled={added}
                      >
                        {added
                          ? "Added ✓"
                          : "Add to Cart"}
                      </button>

                    </div>

                  </div>

                );

              })}

          </div>

        </section>

      ))}

    </main>

  );

}


export default ProductList;