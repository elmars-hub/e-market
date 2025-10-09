"use client";

import React, { useState } from "react";

export default function Add({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) {
  const [quantity, setQuantity] = useState(1);

  // // Temp store
  // const stock = 4;

  function handleQuantity(type: "i" | "d") {
    if (type === "d" && stockNumber > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium">Choose quantity</h2>

      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>

          <div className="text-xs">
            Only <span className="text-orange-500">{stockNumber} items</span>{" "}
            left! <br /> {"Don't"} miss it
          </div>
        </div>

        <button className="text-sm rounded-3xl w-36 ring-1 ring-[#f35c7a] text-[#f35c7a] py-2 px-4 hover:bg-[#f35c7a] hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none transition-colors duration-300">
          Add to cart
        </button>
      </div>
    </div>
  );
}
