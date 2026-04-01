import React, { use } from "react"; // React থেকে use ইম্পোর্ট করুন
import { FaCheck } from "react-icons/fa";

const Digitals = ({ digitalPromise }) => {
  const digitals = use(digitalPromise);

  if (!digitals || !Array.isArray(digitals)) {
    return <div className="text-center py-10">No data found</div>;
  }

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

                <button className="w-full py-3 bg-[#8133FF] text-white font-bold rounded-2xl hover:opacity-90 transition-opacity mt-auto">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Digitals;
