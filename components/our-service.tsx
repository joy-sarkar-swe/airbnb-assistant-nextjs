import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

// Service cards data
const serviceCards = [
  {
    icon: "/services/fi_3176366.png",
    title: "Manage Property\nListings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    border: "",
    bg: "bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.1)]",
  },
  {
    icon: "/services/fi_1048953.png",
    title: "Manage Customer\nBookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shadow: "",
    border: "border border-solid border-[#f9c4d2]",
    bg: "F7F6F6",
  },
  {
    icon: "/services/fi_2954884.png",
    title: "Schedule House \nCleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shadow: "",
    border: "border border-solid border-[#f9c4d2]",
    bg: "F7F6F6",
  },
  {
    icon: "/services/Layer_13.png",
    title: "Monitor Guest\nReviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shadow: "",
    border: "border border-solid border-[#f9c4d2]",
    bg: "F7F6F6",
  },
  {
    icon: "/services/Group.png",
    title: "Track & Report\nExpenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shadow: "",
    border: "border border-solid border-[#f9c4d2]",
    bg: "F7F6F6",
  },
  {
    icon: "/services/Group 39894.png",
    title: "Guest Inquiry \n& Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shadow: "",
    border: "border border-solid border-[#f9c4d2]",
    bg: "F7F6F6",
  },
];

export default function OurService() {
  return (
    <section className='w-full px-4 sm:px-6 md:px-12 lg:px-25  py-12 md:py-16 bg-[#F7F6F6]'>
      <div className='text-center mb-6 md:mb-8'>
        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl tracking-normal leading-snug'>
          <span className='text-black'>Our </span>
          <span className='text-[#ED3C6A]'>Service</span>
        </h2>
      </div>
      <p className='font-medium text-black text-center text-sm leading-relaxed max-w-184.5 mx-auto mb-12'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      {/* Service Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {serviceCards.map((card, index) => (
          <Card
            key={index}
            className={`rounded-[13px] ${card.shadow} ${card.border} ${card.bg} p-0`}>
            <CardContent className='p-6 md:p-8 flex flex-col gap-4 h-full'>
              <Image
                src={card.icon}
                alt={card.title}
                width={84}
                height={84}
                className='w-20 h-auto'
                unoptimized
              />
              <h3 className='font-bold text-[#1e1e1e] text-xl md:text-2xl lg:text-2xl tracking-normal leading-snug whitespace-pre-line mb-3.5'>
                {card.title}
              </h3>
              <p className='font-medium text-black text-sm md:text-base leading-relaxed tracking-normal max-w-full mb-8.75'>
                {card.description}
              </p>
              <Button className='h-auto w-29.75 md:w-32.5 rounded-[44px] border border-solid border-[#ed3c6a] text-[#ED3C6A] font-medium text-sm md:text-base bg-transparent hover:bg-transparent mt-auto cursor-pointer py-2.5'>
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
