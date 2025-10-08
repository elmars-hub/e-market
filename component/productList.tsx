/* eslint-disable @typescript-eslint/no-explicit-any */
import { WixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

export default async function ProductList({
  categoryId,
  limit,
}: {
  categoryId?: string;
  limit?: number;
}) {
  const wixClient = await WixClientServer();

  let query = wixClient.products
    .queryProducts()
    .limit(limit || PRODUCT_PER_PAGE);

  if (categoryId) {
    query = query.eq("collectionIds", categoryId);
  }

  const res = await query.find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt={product.name || "Product"}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              unoptimized
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt={product.name || "Product"}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
                unoptimized
              />
            )}
          </div>

          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>

          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}

          <button className="rounded-2xl w-max ring-1 ring-[#f35c7a] text-[#f35c7a] py-2 px-4 text-xs cursor-pointer  hover:bg-[#f35c7a] hover:text-white transition-colors duration-300">
            Add to cart
          </button>
        </Link>
      ))}
    </div>
  );
}
