/* eslint-disable @typescript-eslint/no-explicit-any */
import Add from "@/component/add";
import CuztomizeProducts from "@/component/customizeProducts";
import ProductImage from "@/component/productimages";
import { WixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";

export default async function SinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const wixClient = await WixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  console.log(product.productOptions);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImage items={product.media?.items} />
      </div>

      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>

        <div className="h-[2px] bg-gray-100" />

        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="text-2xl font-medium">${product.price?.price}</h2>
        ) : (
          <div className="flex item-center gap-4">
            <h2 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h2>
            <h2 className="text-2xl font-medium">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />

        {product.variants && product.productOptions ? (
          <CuztomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId='"00000000-000000-000000-000000000000'
            stockNumber={product.stock?.quantity || 0}
          />
        )}

        <div className="h-[2px] bg-gray-100" />

        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h3 className="font-medium mb-4">{section.title}</h3>
            <p className="">{section.description}</p>
          </div>
        ))}

        <h1 className="text-2xl">User Reviews</h1>
      </div>
    </div>
  );
}
