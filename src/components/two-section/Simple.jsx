import { FaCheck } from "react-icons/fa";

const Simple = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      price: "29",
      description: "Best for professionals",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#101727] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "bg-gradient-to-b from-[#8133FF] to-[#AD1DFF] text-white shadow-2xl lg:scale-105 z-10 border-transparent"
                  : "bg-white text-[#101727] border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                {/* Most Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-300 text-[#101727] text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p
                    className={`${plan.isPopular ? "text-white/80" : "text-gray-500"} text-sm mb-6`}
                  >
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">
                      ${plan.price}
                    </span>
                    <span
                      className={`${plan.isPopular ? "text-white/70" : "text-gray-400"} font-medium`}
                    >
                      /Month
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <FaCheck
                        className={
                          plan.isPopular ? "text-white" : "text-green-500"
                        }
                      />
                      <span
                        className={
                          plan.isPopular ? "text-white/90" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-4 rounded-full font-bold transition-all mt-auto ${
                  plan.isPopular
                    ? "bg-white text-[#8133FF] hover:bg-gray-100"
                    : "bg-[#8133FF] text-white hover:opacity-90"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Simple;
