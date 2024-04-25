"use client";
import { useEffect, useState } from "react";
import useProduct from "@/store/ProductStore";
import { useParams } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";

const ProductsPage = () => {
  const { getProductById } = useProduct();
  const params = useParams();
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (params.pid) {
      const getProduct = async () => {
        const res = await getProductById(params.pid);
        setProduct(res);
        setThumbnailUrl(
          res?.thumbnails.length > 0
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/img/products/${res?.thumbnails[0]}`
            : "/notAvailable.png"
        );
      };
      getProduct();
    }
  }, [params.pid]);

  return (
    <>
      <Navbar />
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse bg-neutral glass rounded-md p-20 text-white">
            <img
              src={thumbnailUrl}
              className="w-56 object-contain rounded-lg"
            />
            <div className="px-10 text-center">
              <h1 className="text-5xl font-bold">{product?.title}</h1>
              <p className="py-3">{product?.description}</p>
              <p className="py-3">Price: ${product?.price}</p>
              <p className="py-3">Category: {product?.category}</p>
              <p className="py-3">Stock: {product?.stock}</p>
              <button className="btn btn-primary">Buy now</button>
            </div>
          </div>
        </div>
    </>
  );
};

export default ProductsPage;
