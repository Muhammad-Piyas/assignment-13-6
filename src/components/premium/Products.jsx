import React, { use } from "react";
import Product from "./Product";

const Products = ({ digitalPromise }) => {
  const digitals = use(digitalPromise);

  return (
    <div className="py-20">
      <div className="text-center mb-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#101727] mb-4">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      <section className="bg-gray-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitals.map((digital) => (
              <Product digital={digital}></Product>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
