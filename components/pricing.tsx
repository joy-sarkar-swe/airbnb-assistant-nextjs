import { Check, X } from "lucide-react";
import Image from "next/image";
import { Switch } from "./ui/switch";

const pricingPlans = [
  {
    title: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: 0,
    features: [
      { text: "20,000+ of PNG & SVG graphics", type: "tick" },
      { text: "Access to 100 million stock images", type: "tick" },
      { text: "Upload custom icons and fonts", type: "cross" },
      { text: "Unlimited Sharing", type: "cross" },
      { text: "Upload graphics & video in up to 4k", type: "cross" },
      { text: "Unlimited Projects", type: "cross" },
      { text: "Instant Access to our design system", type: "cross" },
      { text: "Create teams to collaborate on designs", type: "cross" },
    ],
    buttonColor: "border-[#ed3c6a] text-[#ed3c6a] cursor-pointer",
    bgColor: "",
    textColor: "text-neutral-800",
  },
  {
    title: "Professional",
    description:
      "Ideal for individuals who need advanced features and tools for client work.",
    price: 25,
    features: [
      { text: "20,000+ of PNG & SVG graphics", type: "tick" },
      { text: "Access to 100 million stock images", type: "tick" },
      { text: "Upload custom icons and fonts", type: "tick" },
      { text: "Unlimited Sharing", type: "tick" },
      { text: "Upload graphics & video in up to 4k", type: "tick" },
      { text: "Unlimited Projects", type: "tick" },
      { text: "Instant Access to our design system", type: "cross" },
      { text: "Create teams to collaborate on designs", type: "cross" },
    ],
    buttonColor: "bg-white text-[#ed3c6a] cursor-pointer", // button background white, text color card bg
    bgColor: "bg-[#ed3c6a]", // card bg
    textColor: "text-white", // all text white
  },
  {
    title: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    price: 100,
    features: [
      { text: "20,000+ of PNG & SVG graphics", type: "tick" },
      { text: "Access to 100 million stock images", type: "tick" },
      { text: "Upload custom icons and fonts", type: "tick" },
      { text: "Unlimited Sharing", type: "tick" },
      { text: "Upload graphics & video in up to 4k", type: "tick" },
      { text: "Unlimited Projects", type: "tick" },
      { text: "Instant Access to our design system", type: "tick" },
      { text: "Create teams to collaborate on designs", type: "tick" },
    ],
    buttonColor: "border-[#ed3c6a] text-[#ed3c6a] cursor-pointer",
    bgColor: "",
    textColor: "text-neutral-800",
  },
];

const FeatureItem = ({
  text,
  type,
  textColor,
  planTitle,
}: {
  text: string;
  type: "tick" | "cross";
  textColor: string;
  planTitle: string;
}) => {
  const isTick = type === "tick";

  // Cross background for Freebie card is neutral-50
  const crossBg =
    planTitle === "Professional"
      ? "bg-white border border-neutral-300"
      : planTitle === "Freebie"
        ? "bg-neutral-50"
        : "bg-[#f9c4d2]";

  const crossColor =
    planTitle === "Professional" ? "text-neutral-800" : "text-neutral-800";

  return (
    <div className='flex items-center gap-4'>
      <div
        className={`inline-flex p-2 rounded-full ${
          isTick ? "bg-[#f9c4d2]" : crossBg
        }`}>
        {isTick ? (
          <Check className={`w-4 h-4 text-[#ED3C6A]`} />
        ) : (
          <X className={`w-4 h-4 ${crossColor}`} />
        )}
      </div>
      <div
        className={`flex-1 text-base ${
          isTick
            ? textColor
            : planTitle === "Professional"
              ? "text-white/70"
              : "text-neutral-400"
        }`}>
        {text}
      </div>
    </div>
  );
};

export default function Pricing() {
  return (
    <section
      id='pricing'
      className='relative w-full px-6 md:px-16 lg:px-32 py-16'>
      {/* Header */}
      <div className='flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]'>
        <div className='relative max-w-141.5 -mt-px  font-bold text-neutral-800 text-[40px] text-center tracking-[0] leading-[normal]'>
          <span className='text-[#191d23]'>Airnbn Assistent</span>
          <span className='text-[#ed3c6a]'> pricing</span>
        </div>

        <div className='relative w-fit  font-normal text-neutral-800 text-xl text-center tracking-[0] leading-[normal] mb-9.5'>
          Choose a plan that&apos;s right for you
        </div>
      </div>

      <div className='relative flex items-start justify-center gap-6 self-stretch w-full flex-[0_0_auto] sm:mb-22.5 mb-10'>
        <div className='relative w-fit -mt-px  font-normal text-neutral-800 text-base tracking-[0] leading-[normal]'>
          Pay Monthly
        </div>

        <Switch />

        <div className='inline-flex flex-col items-center justify-center gap-0.75 relative flex-[0_0_auto]'>
          <div className='relative w-fit -mt-px  font-normal text-neutral-800 text-base tracking-[0] leading-[normal] '>
            Pay Yearly
          </div>
        </div>

        <div className='absolute sm:block hidden sm:-top-10 sm:left-[60%] w-46.75 h-21.75'>
          <Image
            className='absolute top-10 left-px'
            alt='Arrow'
            height={87}
            width={185}
            src='/pricing/Group 39875.png'
          />
        </div>
      </div>

      {/* Pricing Cards */}
      <div className='flex flex-col lg:flex-row gap-8'>
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`flex-1 flex flex-col justify-between rounded-xl p-6 md:p-10 border border-[#FAC4D2] ${plan.bgColor}`}>
            <div>
              <h3
                className={`text-2xl font-bold mb-2 ${plan.textColor} font-monorepo`}>
                {plan.title}
              </h3>
              <p className={`text-base mb-6 ${plan.textColor} font-monorepo`}>
                {plan.description}
              </p>

              <div className='flex items-center gap-2 mb-6'>
                <span
                  className={`text-[56px] font-semibold ${plan.textColor} font-monorepo`}>
                  ${plan.price}
                </span>
                <span className={`text-base font-light ${plan.textColor}`}>
                  / Month
                </span>
              </div>

              <button
                className={`w-full h-11 rounded flex items-center justify-center font-semibold ${plan.buttonColor} border border-solid`}>
                Get Started Now
              </button>
            </div>

            {/* Features */}
            <div className='mt-8 flex flex-col gap-4'>
              {plan.features.map((feature, idx) => (
                <FeatureItem
                  key={idx}
                  text={feature.text}
                  type={feature.type as "tick" | "cross"}
                  textColor={plan.textColor}
                  planTitle={plan.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
