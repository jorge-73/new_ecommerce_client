import Navbar from "@/components/navbar/Navbar";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-100px)] justify-center items-center text-center text-white">
        <h1 className="text-2xl">404 | This page could not be found</h1>
      </div>
    </>
  );
};

export default NotFound;
