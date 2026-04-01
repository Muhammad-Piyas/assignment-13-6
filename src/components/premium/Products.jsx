import React, { use } from "react";
import Product from "./Product";

const Products = ({ digitalPromise, carts, setCarts }) => {
  const digitals = use(digitalPromise);

  return (
    <div className="py-20">
      <section className="bg-gray-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitals.map((digital) => (
              <Product
                key={digital.id}
                digital={digital}
                carts={carts}
                setCarts={setCarts}
              ></Product>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
