"use client";
import React from "react";
const AddCart = () => {
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => console.log("Cart added")}
      >
        Add cart
      </button>
    </div>
  );
};

export default AddCart;
