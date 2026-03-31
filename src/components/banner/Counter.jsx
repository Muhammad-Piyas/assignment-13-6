const Counter = () => {
  return (
    <div className="bg-gradient-to-r from-[#8133FF] to-[#AD1DFF] py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center justify-center">
          <div className="text-center text-white border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0">
            <h2 className="text-4xl lg:text-5xl font-bold mb-2">50K+</h2>
            <p className="text-white/80 font-medium tracking-wide">
              Active Users
            </p>
          </div>

          <div className="text-center text-white border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0">
            <h2 className="text-4xl lg:text-5xl font-bold mb-2">200+</h2>
            <p className="text-white/80 font-medium tracking-wide">
              Premium Tools
            </p>
          </div>

          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-2">4.9</h2>
            <p className="text-white/80 font-medium tracking-wide">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
