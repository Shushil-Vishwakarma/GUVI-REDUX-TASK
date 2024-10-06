import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAlertMessage(`${product.title} has been added to your cart!`);
    setShowAlert(true);

    // Hide the alert after a few seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Products</h1>
      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Success!</strong> {alertMessage}
          <button type="button" className="close" onClick={() => setShowAlert(false)}>
            <span>&times;</span>
          </button>
        </div>
      )}
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>Price: ${product.price}</strong>
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductList;
