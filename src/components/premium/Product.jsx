import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const Product = ({ digital, carts, setCarts }) => {
  const [isCart, setCart] = useState(false);

  const handleCart = () => {
    setCart(true);

    const isFound = carts.find((item) => item.id === digital.id);

    if (isFound) {
      toast.error("This item is already in your cart!");
      return;
    }

    setCarts([...carts, digital]);
    toast.success("Item added to cart!");
  };
  return (
    <div
      key={digital.id}
      className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
    >
      {/* Tag Badge */}
      <div
        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow-sm ${
          digital.tagType === "best seller"
            ? "bg-orange-100 text-orange-600"
            : digital.tagType === "popular"
              ? "bg-blue-100 text-blue-600"
              : "bg-green-100 text-green-600"
        }`}
      >
        {digital.tag}
      </div>

      <div>
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
          {digital.icon}
        </div>

        <h3 className="text-xl font-bold text-[#101727] mb-2">
          {digital.name}
        </h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          {digital.description}
        </p>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-extrabold text-[#101727]">
            ${digital.price}
          </span>
          <span className="text-gray-400 text-sm font-medium lowercase">
            /{digital.period}
          </span>
        </div>

        <ul className="space-y-3 mb-8">
          {digital.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm text-gray-600"
            >
              <FaCheck className="text-green-500 text-xs" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleCart}
        className={`w-full py-3 text-white font-bold rounded-2xl transition-all mt-auto ${
          isCart
            ? "bg-green-500 hover:bg-green-600"
            : "bg-[#8133FF] hover:opacity-90"
        }`}
      >
        {isCart ? "Added to Cart!" : "Buy Now"}
      </button>
    </div>
  );
};

export default Product;
