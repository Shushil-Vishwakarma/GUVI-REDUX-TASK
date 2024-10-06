import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from './cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart mt-4">
      <h2 className="text-center">Your Cart</h2>
      {cart.items.length === 0 ? (
        <p className="text-center">No items in the cart.</p>
      ) : (
        <div>
          {cart.items.map(item => (
            <div key={item.id} className="cart-item card mb-3 p-3">
              <div className="row">
                <div className="col-md-8">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                  <div className="btn-group">
                    <button
                      className="btn btn-secondary"
                      onClick={() => dispatch(increaseQuantity(item))}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => dispatch(decreaseQuantity(item))}
                      disabled={item.quantity === 1} // Disable if quantity is 1
                    >
                      -
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-3">
            <h3>Total Quantity: {cart.totalQuantity}</h3>
            <h3>Total Amount: ${cart.totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
