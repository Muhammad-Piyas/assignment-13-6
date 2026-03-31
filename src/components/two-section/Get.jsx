import userIcon from "../../assets/user.png";
import packageIcon from "../../assets/package.png";
import rocketIcon from "../../assets/rocket.png";

const Get = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
      icon: userIcon,
    },
    {
      id: "02",
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
      icon: packageIcon,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: rocketIcon,
    },
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#8133FF] text-white flex items-center justify-center text-xs font-bold shadow-lg">
                {step.id}
              </div>

              <div className="w-24 h-24 bg-[#F5F0FF] rounded-full flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#101727] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Get;
