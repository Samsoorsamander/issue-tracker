"use client";
import React from "react";
const AddCart = () => {
  return (
    <div className="p-5 mx-5 text-xl text-white bg-sky-400 hover:bg-sky-900">
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
