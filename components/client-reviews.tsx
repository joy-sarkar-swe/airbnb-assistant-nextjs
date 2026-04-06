import { Star } from "lucide-react";
import Image from "next/image";

// Testimonials data
const testimonialsData = [
  {
    name: "Jenny Wilson",
    avatar: "/client-review/Ellipse 21 (2).png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bg: "bg-[#f6f6f6]",
    shadow: "",
    border: "border",
  },
  {
    name: "Esther Howard",
    avatar: "/client-review/Ellipse 21 (1).png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bg: "bg-white",
    shadow: "shadow-[0px_4px_77.4px_#88888869]",
    border: "",
  },
  {
    name: "Robert Fox",
    avatar: "/client-review/Ellipse 21 (2).png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bg: "bg-[#f6f6f6]",
    shadow: "",
    border: "border",
  },
];

export default function ClientReviews() {
  return (
    <section className='w-full px-4 md:px-8 lg:px-16 py-12 md:py-16'>
      {/* Header */}
      <div className='text-center mb-6 md:mb-10'>
        <h2 className='font-bold text-[26px] md:text-[32px]'>
          <span className='text-black'>Check Our Clients </span>
          <span className='text-[#ed3c6a]'>Review</span>
        </h2>
        <p className='font-medium text-black text-sm md:text-base max-w-[700px] mx-auto mt-4 leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`w-full ${testimonial.bg} rounded-[11px] p-5 md:p-6 ${testimonial.shadow} ${testimonial.border} flex flex-col gap-4`}>
            {/* Top */}
            <div className='flex items-center gap-4'>
              <div className='relative w-14 h-14 md:w-16 md:h-16'>
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  unoptimized
                  className='object-cover rounded-full'
                />
              </div>

              <h3 className='font-bold text-black text-lg md:text-xl'>
                {testimonial.name}
              </h3>
            </div>

            {/* Text */}
            <p className='font-medium text-black text-sm md:text-base leading-relaxed'>
              {testimonial.text}
            </p>

            {/* Stars */}
            <div className='flex gap-1'>
              {[1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className='w-4 h-4 text-[#FF9D00] fill-[#FF9D00]'
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
