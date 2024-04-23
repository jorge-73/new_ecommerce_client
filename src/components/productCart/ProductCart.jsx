import Link from "next/link";

const ProductCart = (product) => {
  const thumbnailUrl = product?.product?.thumbnails.length > 0
  ? product?.product?.thumbnails[0]
  : "/notAvailable.png" 

  return (
    <div className="card glass text-white w-3/4 md:w-full mx-auto hover:cursor-pointer">
      <figure>
        <img
          src={thumbnailUrl}
          alt={product?.product?.title}
          className=" w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{product?.product?.title}</h2>
        <p>{product?.product?.description}</p>
        <p>${product?.product?.price}</p>
        <div className="card-actions justify-between items-center">
          <Link href={`/products/${product?.product?._id}`} className="btn btn-accent">Info</Link>
          <button className="btn btn-primary">Buy now!</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
