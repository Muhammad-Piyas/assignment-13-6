import React from "react";
// এখানে আপনার পছন্দমতো আইকন বা ইমেজ ইম্পোর্ট করুন
import rocketIcon from "../../assets/rocket.png";

const Card = () => {
  return (
    <div className="p-10 bg-gray-50 flex justify-center">
      {/* মেইন কার্ড */}
      <div className="max-w-sm bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
        {/* আইকন বা ইমেজ সেকশন */}
        <div className="w-16 h-16 bg-[#F5F0FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <img
            src={rocketIcon}
            alt="Icon"
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* টেক্সট কন্টেন্ট */}
        <h3 className="text-2xl font-bold text-[#101727] mb-3">
          Fast Integration
        </h3>
        <p className="text-gray-500 leading-relaxed mb-6">
          Connect our tools with your existing workflow in minutes. Simple,
          powerful, and easy to use for everyone.
        </p>

        {/* অ্যাকশন বাটন বা লিংক */}
        <button className="text-[#8133FF] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
          Learn More <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
