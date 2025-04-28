import React from "react";
import AddCart from "./AddCart";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div>
      <h1 className="text-base text-black">Hello world</h1>
      <Link href={"./user"}>Users</Link>
      <AddCart />
    </div>
  );
};

export default ProductCard;
