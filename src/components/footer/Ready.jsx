const Ready = () => {
  return (
    <div className="bg-gradient-to-r from-[#8133FF] to-[#AD1DFF] py-20 px-4">
      <div className="container mx-auto  px-6 text-center text-white ">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button className="btn bg-white text-[#8133FF] border-none hover:bg-gray-100 rounded-full px-8 font-bold text-lg">
            Explore Products
          </button>
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#8133FF] rounded-full px-12 md:px-10 font-bold text-lg">
            View Pricing
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80 font-medium">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </div>
  );
};

export default Ready;
