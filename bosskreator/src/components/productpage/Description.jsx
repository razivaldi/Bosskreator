import React from "react";

const Description = ({ product }) => {
  return (
    <div className="relative z-10">
      <p className="indent-8 font-medium text-xl">{product.description}</p>
      <ul className="indent-8 my-[18px] list-disc list-inside w-full grid grid-cols-[auto_1fr] gap-x-6 font-medium text-xl">
        <li className="text-accent">Product Name</li><span>: {product.name}</span>
        <li className="text-accent">Product Code/SKU</li><span>: {product.SKU}</span>
        <li className="text-accent">Publisher</li><span>: {product.name}</span>
      </ul>
      <p className="indent-8 font-medium text-xl">{product.description}</p>
    </div>
  )
};

export default Description;
