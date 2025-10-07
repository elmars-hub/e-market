import Add from "@/component/add";
import CuztomizeProducts from "@/component/customizeProducts";
import ProductImage from "@/component/productimages";

export default function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImage />
      </div>

      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, suscipit
          aliquam vero animi tempora veniam non voluptates a rem. Voluptatum
          magnam voluptas reiciendis blanditiis autem obcaecati!
        </p>

        <div className="h-[2px] bg-gray-100" />

        <div className="flex item-center gap-4">
          <h2 className="text-xl text-gray-500 line-through">$100</h2>
          <h2 className="text-2xl font-medium">$50</h2>
        </div>

        <div className="h-[2px] bg-gray-100" />

        <CuztomizeProducts />
        <Add />

        <div className="h-[2px] bg-gray-100" />

        <div className="text-sm">
          <h3 className="font-medium mb-4">Title</h3>
          <p className="">
            Lorem ipsum um architecto illo eaque cupiditate rerum? Tenetur
            perspiciatis ipsa dolorum quod consequuntur vel omnis eveniet iste
            culpa molestias! Impedit, praesentium?
          </p>
        </div>
        <div className="text-sm">
          <h3 className="font-medium mb-4">Title</h3>
          <p className="">
            Lorem ipsum um architecto illo eaque cupiditate rerum? Tenetur
            perspiciatis ipsa dolorum quod consequuntur vel omnis eveniet iste
            culpa molestias! Impedit, praesentium?
          </p>
        </div>
        <div className="text-sm">
          <h3 className="font-medium mb-4">Title</h3>
          <p className="">
            Lorem ipsum um architecto illo eaque cupiditate rerum? Tenetur
            perspiciatis ipsa dolorum quod consequuntur vel omnis eveniet iste
            culpa molestias! Impedit, praesentium?
          </p>
        </div>

        <h1 className="text-2xl">User Reviews</h1>
      </div>
    </div>
  );
}
