"use client";
import { useAuth } from "@/contexts/AuthContext";
import useProduct from "@/store/ProductStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCart from "@/components/productCart/ProductCart";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const ProductsPage = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const { products, getProducts } = useProduct();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated && !user) {
      router.push("/login");
    }
    getProducts();
  }, [user, isAuthenticated]);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className=" text-center text-white">
          <span className="loading loading-infinity loading-lg mt-3"></span>
        </div>
      ) : (
        <>
          <div className="px-5 lg:px-30 xl:px-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {products &&
              products.map((product, idx) => (
                <ProductCart key={idx} product={product} />
              ))}
          </div>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default ProductsPage;
