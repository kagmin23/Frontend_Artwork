import React from 'react';
import { Link } from 'react-router-dom';

const SavePage = ({ savedProducts }) => {
  return (
    <div>
      <h1>Your Saved Products</h1>
      <div className="product-list">
        {savedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-card">
              <div className="product-images">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
              </div>
              <div className="product-content">
                <p>Author: {product.author}</p>
                <h3 className="product-title">{product.name}</h3>
                <p>Price: {product.price}</p>
                <Link to={`/product/${product.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavePage;
