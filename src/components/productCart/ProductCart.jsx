import React from "react";

const ProductCart = (product) => {
  return (
    <div className="card glass text-white w-full">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="car!"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">{product.product.title}</h2>
        <p>{product.product.description}</p>
        <div className="card-actions justify-between items-center">
          <p>${product.product.price}</p>
          <button className="btn btn-primary">Buy now!</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;

