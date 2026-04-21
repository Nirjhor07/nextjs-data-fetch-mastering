export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/products");
  const books = await res.json();

  return books.slice(0, 2).map((book) => ({ ProdId: book.id }));
};

const ProductDetails = async ({ params }) => {
  const { ProdId } = await params;
  //   console.log(ProdId);

  const booksPromise = async () => {
    const res = await fetch(`http://localhost:5000/products/${ProdId}`);
    return await res.json();
  };

  const books = await booksPromise();
  const { name, price, description } = books;

  return (
    <div className="card card-border bg-base-200 mx-auto mt-7">
      <div className="card-body">
        <h2 className="card-title"></h2>
        <p>{name}</p>
        <p>{price}</p>
        <p>${description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
