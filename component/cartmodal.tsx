"use client";

import Image from "next/image";

export default function CartModal() {
  const cartItems = true;

  return (
    <div className="w-max absolute top-12 rounded-md p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        // list
        <>
          <h2 className="text-xl">Shopping cart</h2>

          <div className="flex flex-col gap-8">
            {/* item */}

            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />

              <div className="flex flex-col justify-between w-full">
                {/* top */}
                <div className=""></div>

                {/* title */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>

                {/* desc */}
                <div className="text-sm text-gray-50">available</div>

                {/* bottom */}

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$50</span>
            </div>

            <p className="mt-2 mb-4 text-sm test-gray-500">
              Shipping and taxes calculated at checkout
            </p>

            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Check out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
