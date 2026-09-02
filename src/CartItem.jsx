import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Checkout Coming Soon!");
  };

  return (
    <main className="cart-page">
      <section className="page-heading">
        <p className="eyebrow">Your Shopping Cart</p>

        <h1>Shopping Cart</h1>

        <p>
          {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </section>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-icon">🪴</div>

          <h2>Your cart is empty</h2>

          <p>
            Add some beautiful plants to your cart.
          </p>

          <Link className="primary-button" to="/plants">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => {
              const itemTotal =
                item.price * item.quantity;

              return (
                <article
                  className="cart-item"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-details">
                    <span className="category-label">
                      {item.category}
                    </span>

                    <h2>{item.name}</h2>

                    <p>
                      Unit Price: $
                      {item.price.toFixed(2)}
                    </p>

                    <div className="quantity-row">
                      <button
                        className="quantity-button"
                        onClick={() =>
                          dispatch(
                            decreaseQuantity(item.id)
                          )
                        }
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>

                      <span className="quantity-number">
                        {item.quantity}
                      </span>

                      <button
                        className="quantity-button"
                        onClick={() =>
                          dispatch(
                            increaseQuantity(item.id)
                          )
                        }
                      >
                        +
                      </button>

                      <button
                        className="delete-button"
                        onClick={() =>
                          dispatch(
                            removeFromCart(item.id)
                          )
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <strong className="item-total">
                    ${itemTotal.toFixed(2)}
                  </strong>
                </article>
              );
            })}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-line">
              <span>Total Items</span>
              <strong>{totalItems}</strong>
            </div>

            <div className="summary-line total-line">
              <span>Total Amount</span>

              <strong>
                ${totalAmount.toFixed(2)}
              </strong>
            </div>

            <button
              className="checkout-button"
              onClick={handleCheckout}
            >
              Checkout
            </button>

            <Link
              className="continue-button"
              to="/plants"
            >
              Continue Shopping
            </Link>
          </aside>
        </section>
      )}
    </main>
  );
}