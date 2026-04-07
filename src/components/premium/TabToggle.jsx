const TabToggle = ({ activeTab, setActiveTab, cartCount }) => {
  return (
    <div className="flex justify-center my-10">
      <div className="tabs tabs-boxed bg-white border border-gray-100 p-1 rounded-full shadow-sm">
        {/* Products Tab */}
        <input
          type="radio"
          name="tab_toggle"
          className="tab !rounded-full !h-12 px-8 text-base font-bold checked:!bg-[#8133FF] checked:!text-white !text-[#8133FF] transition-all"
          aria-label="Products"
          onClick={() => setActiveTab("product")}
          defaultChecked={activeTab === "product"}
        />

        {/* Cart Tab */}
        <input
          type="radio"
          name="tab_toggle"
          className="tab !rounded-full !h-12 px-8 text-base font-bold checked:!bg-[#8133FF] checked:!text-white !text-[#8133FF] transition-all"
          aria-label={`Cart (${cartCount})`}
          onClick={() => setActiveTab("cart")}
          defaultChecked={activeTab === "cart"}
        />
      </div>
    </div>
  );
};

export default TabToggle;
