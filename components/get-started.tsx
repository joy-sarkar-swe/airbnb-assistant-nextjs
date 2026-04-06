import Image from "next/image";

const onboardingSteps = [
  {
    number: "01",
    title: "Add requirements\n& sign up today",
    icon: "/get-started/Group 39879.png",
    width: 72,
    height: 58,
    cardBorder: "border-2 border-solid border-[#fdebf0]",
  },
  {
    number: "02",
    title: "Connect with your CSM & onboarding team",
    icon: "/get-started/Group 39878.png",
    width: 109,
    height: 124,
    cardBorder: "border-2 border-solid border-[#fdebf0]",
  },
  {
    number: "03",
    title: "Meet your STR Assistant next week",
    icon: "/get-started/Group 39881.png",
    width: 73,
    height: 61,
    cardBorder: "border-2 border-solid border-[#fdebf0]",
  },
];

export default function GetStarted() {
  return (
    <section className='w-full px-6 md:px-12 lg:px-24 py-16'>
      <div className='text-center mb-4'>
        <h2 className='font-bold text-[28px] md:text-[32px]'>
          <span className='text-black'>Getting Started is </span>
          <span className='text-[#ed3c6a]'>Easy</span>
        </h2>
      </div>

      <p className='font-medium text-black text-center text-sm md:text-base max-w-175 mx-auto mb-16'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Steps */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-300 mx-auto'>
        {onboardingSteps.map((step, index) => (
          <div key={index} className='flex flex-col items-center gap-4'>
            <div className='relative w-full max-w-70 pt-5'>
              {/* Number */}
              <div className='absolute top-0 -left-2 z-10 w-14 h-14 md:w-16 md:h-16 rounded-full border-[#ed3c6a] border-4 bg-white flex items-center justify-center text-xl md:text-[29px] font-medium'>
                {step.number}
              </div>

              {/* Card */}
              <div
                className={`w-full h-45 md:h-48 bg-white rounded-[9px] ${step.cardBorder} flex items-center justify-center`}>
                <Image
                  src={step.icon}
                  alt={`Step ${step.number}`}
                  width={step.width}
                  height={step.height}
                  unoptimized
                  className='object-contain'
                />
              </div>
            </div>

            {/* Title */}
            <p className='font-semibold text-black text-lg md:text-xl text-center whitespace-pre-line'>
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
