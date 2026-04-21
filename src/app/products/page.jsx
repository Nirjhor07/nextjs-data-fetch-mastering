import Product from "@/Components/Products/Product";
import { revalidateTag } from "next/cache";

// function to fetch products data
const productsPromise = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  //    cache: "no-store", kisu store kore rakhe na real time update hoye jay like football match score
  //   cache: "force-cache" // stored the data in cache memory
  if (!res.ok) {
    throw new Error(" failed to load api data");
  } else {
    return await res.json();
  }
};

const ProductsPage = async () => {
  const products = await productsPromise();
  //   console.log(products);
  return (
    <div className="mx-auto container bg-base-200 flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold text-center py-5">
        {" "}
        This is my product page
      </h2>
      <div className="grid grid-cols-3 gap-4 py-3 ">
        {products.map((prod) => (
          <Product key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
