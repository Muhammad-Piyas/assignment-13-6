import heroImg from "../../assets/banner.png";
import icon from "../../assets/Play.png";

const Banner = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-100 px-4 lg:px-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-50">
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={heroImg}
            className="max-w-full rounded-2xl shadow-2xl"
            alt="Hero Section"
          />
        </div>

        <div className="flex-1 text-center lg:text-left ">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-base-content leading-tight">
            Supercharge Your <br className="hidden lg:block" />
            <span className="text-base-content">Digital Workflow</span>
          </h1>

          <p className="py-6 text-base-content/70 text-lg max-w-lg mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn rounded-full px-8 text-white text-lg border-none bg-gradient-to-r from-[#8133FF] to-[#AD1DFF] hover:opacity-90">
              Explore Products
            </button>

            <button className="btn btn-outline border-primary/30 rounded-full px-8 hover:bg-primary/5 hover:border-primary flex items-center gap-2">
              <img
                src={icon}
                alt="Play Icon"
                className="h-4 w-4 object-contain"
              />
              <span className="text-[15px] font-medium bg-gradient-to-r from-[#8133FF] to-[#AD1DFF] bg-clip-text text-transparent hover:opacity-90">
                Watch Demo
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
