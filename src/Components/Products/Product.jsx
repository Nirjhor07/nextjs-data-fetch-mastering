import Link from "next/link";

const Product = ({ prod }) => {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{prod.name}</h2>
        <p>{prod.description}</p>
        <p>${prod.price}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${prod.id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
