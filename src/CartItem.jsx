import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  removeItem,
  updateQuantity
} from "./CartSlice";


function CartItem() {

  const dispatch = useDispatch();


  const cartItems = useSelector(
    (state) => state.cart.items
  );


  // Calculate total amount of whole cart
  const calculateTotalAmount = () => {

    return cartItems.reduce(
      (total, item) => {

        return total +
          (item.quantity * item.price);

      },
      0
    );

  };


  // Increase quantity
  const handleIncrease = (item) => {

    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );

  };


  // Decrease quantity
  const handleDecrease = (item) => {

    if (item.quantity > 1) {

      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );

    }

  };


  // Delete item
  const handleRemove = (id) => {

    dispatch(removeItem(id));

  };


  // Empty cart
  if (cartItems.length === 0) {

    return (

      <main className="cart-page">

        <div className="cart-empty">

          <h1>
            Your Cart is Empty
          </h1>

          <p>
            Add some beautiful plants
            to your cart.
          </p>

          <Link
            to="/plants"
            className="primary-button"
          >
            Continue Shopping
          </Link>

        </div>

      </main>

    );

  }


  return (

    <main className="cart-page">


      <div className="cart-header">

        <h1>
          Shopping Cart
        </h1>

        <Link to="/plants">
          Continue Shopping
        </Link>

      </div>


      <div className="cart-content">


        <div className="cart-items">

          {cartItems.map((item) => {


            // Individual item total
            const itemTotal =
              item.quantity * item.price;


            return (

              <div
                className="cart-item"
                key={item.id}
              >


                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />


                <div className="cart-item-info">

                  <h2>
                    {item.name}
                  </h2>


                  <p>
                    Unit Price: $
                    {item.price}
                  </p>


                  <p>
                    Quantity:
                    {" "}
                    {item.quantity}
                  </p>


                  <p>
                    Item Total: $
                    {itemTotal.toFixed(2)}
                  </p>


                  <div className="quantity-controls">


                    <button
                      onClick={() =>
                        handleDecrease(item)
                      }
                      disabled={
                        item.quantity === 1
                      }
                    >
                      -
                    </button>


                    <span>
                      {item.quantity}
                    </span>


                    <button
                      onClick={() =>
                        handleIncrease(item)
                      }
                    >
                      +
                    </button>


                  </div>


                  <button
                    className="delete-button"
                    onClick={() =>
                      handleRemove(item.id)
                    }
                  >
                    Delete
                  </button>


                </div>

              </div>

            );

          })}

        </div>


        <aside className="cart-summary">

          <h2>
            Cart Summary
          </h2>


          <p>
            Total Amount:
          </p>


          <strong>
            ${calculateTotalAmount().toFixed(2)}
          </strong>


          <br />
          <br />


          <button
            className="primary-button"
            onClick={() =>
              alert("Checkout Coming Soon!")
            }
          >
            Checkout
          </button>


          <br />
          <br />


          <Link
            to="/plants"
            className="secondary-button"
          >
            Continue Shopping
          </Link>

        </aside>


      </div>

    </main>

  );

}


export default CartItem;