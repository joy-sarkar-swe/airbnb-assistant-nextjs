import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const features = [
  { label: "Brilliant Client Service" },
  { label: "Flexibility & Adaptibility" },
  { label: "We make it Personal" },
  { label: "We have expart in our team" },
];

export default function OnboardingSteps() {
  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-10 md:py-16'>
      <div className='w-full bg-[#fdebf0] rounded-[20px] md:rounded-[33px] border border-[#f8becd] flex flex-col xl:flex-row overflow-hidden px-16 py-14'>
        {/* Left Content */}
        <div className='flex flex-col justify-center flex-1'>
          <h2 className='font-bold text-black text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight'>
            Few Reasons Why you Choose us?
          </h2>

          <p className='font-medium text-black text-sm md:text-base mb-6 md:mb-8 max-w-130 leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          {/* Features */}
          <ul className='flex flex-col gap-4 md:gap-5 mb-8 md:mb-10'>
            {features.map((feature, index) => (
              <li key={index} className='flex items-center gap-3'>
                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#f9c4d2] shrink-0'>
                  <Check className='w-4 h-4 text-[#ed3c6a]' />
                </div>
                <span className='font-semibold text-[#1e1e1e] text-sm md:text-base'>
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <Button className='w-50 flex items-center justify-center gap-2 px-3 py-2.5 lg:px-4 lg:py-3 xl:px-4.5 xl:py-5.5 bg-[#ED3C6A] rounded-[5px] overflow-hidden hover:bg-[#d4325a] border-none cursor-pointer transition-all duration-200 hover:scale-105'>
            <span className=' font-bold text-[#ffffff] text-xs xl:text-sm text-center tracking-[0] leading-3.5 whitespace-nowrap'>
              Schedule A Meeting
            </span>
            <ArrowRight className='w-3 h-3 xl:w-4 xl:h-4' />
          </Button>
        </div>
        {/* Right Image */}
        <div className='relative w-full xl:w-[45%] h-80 hidden sm:block md:h-110 xl:h-auto mx-auto shrink-0 mr-8 sm:mt-10 md:mt-0'>
          <Image
            src='/onboarding-steps/Group 39928.png'
            alt='Onboarding'
            fill
            unoptimized
            className='object-contain object-bottom'
          />
        </div>
      </div>
    </section>
  );
}
