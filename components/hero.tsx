import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

// ----- Types -----
type PositionKey =
  | "logo-airbnb"
  | "logo-booking"
  | "logo-vrbo"
  | "logo-trip"
  | "ellipse-7"
  | "ellipse-4"
  | "ellipse-6"
  | "ellipse-2"
  | "ellipse-8"
  | "ellipse-5"
  | "ellipse-3";

type SizeKey = "xs" | "sm" | "md";

// ----- Config -----
const floatingLogos = [
  {
    src: "/hero/airbnb.png",
    alt: "airbnb",
    width: 106,
    height: 106,
    position: "logo-airbnb" as PositionKey,
  },
  {
    src: "/hero/b.png",
    alt: "booking",
    width: 65,
    height: 65,
    position: "logo-booking" as PositionKey,
  },
  {
    src: "/hero/v.png",
    alt: "vrbo",
    width: 75,
    height: 75,
    position: "logo-vrbo" as PositionKey,
  },
  {
    src: "/hero/trip.png",
    alt: "tripadvisor",
    width: 89,
    height: 89,
    position: "logo-trip" as PositionKey,
  },
];

const ellipses = [
  {
    src: "/hero/Ellipse 7.png",
    size: "sm" as SizeKey,
    position: "ellipse-7" as PositionKey,
  },
  {
    src: "/hero/Ellipse 4.png",
    size: "md" as SizeKey,
    position: "ellipse-4" as PositionKey,
  },
  {
    src: "/hero/Ellipse 6.png",
    size: "sm" as SizeKey,
    position: "ellipse-6" as PositionKey,
  },
  {
    src: "/hero/Ellipse 2.png",
    size: "sm" as SizeKey,
    position: "ellipse-2" as PositionKey,
  },
  {
    src: "/hero/Ellipse 8.png",
    size: "xs" as SizeKey,
    position: "ellipse-8" as PositionKey,
  },
  {
    src: "/hero/Ellipse 5.png",
    size: "sm" as SizeKey,
    position: "ellipse-5" as PositionKey,
  },
  {
    src: "/hero/Ellipse 3.png",
    size: "xs" as SizeKey,
    position: "ellipse-3" as PositionKey,
  },
];

// ----- Position and Size Classes -----
const positionClasses: Record<PositionKey, string> = {
  "logo-airbnb":
    "left-[20%] top-[18%] sm:top-[18%] sm:left-[20%] md:left-[22%] lg:top-[20%]",
  "logo-booking": "right-[20%] top-[20%] lg:top-[24%] lg:right-[23%]",
  "logo-vrbo": "left-[5%] bottom-[18%] sm:bottom-[30%] sm:left-[25%]",
  "logo-trip":
    "bottom-[17%] right-[10%] sm:bottom-[30%] sm:right-[25%] lg:right-[24%]",
  "ellipse-7":
    "left-[6%] top-[10%] md:left-[8%] md:top-[12%] lg:left-[6%] lg:top-[14%]",
  "ellipse-4": "left-[48%] top-[12%] md:top-[15%]",
  "ellipse-6": "right-[6%] top-[25%] md:top-[30%] lg:top-[38%]",
  "ellipse-2": "left-[10%] top-[40%] md:top-[45%] lg:top-[50%]",
  "ellipse-8": "left-[8%] bottom-[10%] md:bottom-[12%]",
  "ellipse-5": "left-1/2 bottom-[8%] -translate-x-1/2",
  "ellipse-3": "right-[4%] bottom-[15%] md:bottom-[18%]",
};

const sizeClasses: Record<PositionKey | SizeKey, string> = {
  xs: "w-1.75 h-1.75",
  sm: "w-3.25 h-3.25",
  md: "w-3.75 h-3.75",

  "logo-airbnb": "w-14 h-14 md:w-20 md:h-20 lg:w-26.5 lg:h-26.5",
  "logo-booking": "w-12 h-12 md:w-16 md:h-16 lg:w-16.5 lg:h-16.25",
  "logo-vrbo": "w-12 h-12 md:w-16 md:h-16 lg:w-18.75 lg:h-18.75",
  "logo-trip": "w-16 h-16 md:w-18 md:h-18 lg:w-22.25 lg:h-22.5",

  "ellipse-7": "w-3.25 h-3.25",
  "ellipse-4": "w-3.75 h-3.75",
  "ellipse-6": "w-3.25 h-3.25",
  "ellipse-2": "w-3.25 h-3.25",
  "ellipse-8": "w-1.75 h-1.75",
  "ellipse-5": "w-3.25 h-3.25",
  "ellipse-3": "w-1.75 h-1.75",
};

// ----- Component -----
export default function Hero() {
  return (
    <section className='relative min-h-screen overflow-hidden bg-white'>
      {/* Background */}
      <div className='pointer-events-none absolute inset-0 z-0'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className='absolute top-0 left-0 right-0 h-16'
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,182,193,0.35) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Ellipses */}
      <div className='pointer-events-none absolute inset-0 z-30'>
        {ellipses.map((ellipse) => (
          <Image
            key={ellipse.src}
            src={ellipse.src}
            alt=''
            width={ellipse.size === "xs" ? 7 : ellipse.size === "sm" ? 13 : 15}
            height={ellipse.size === "xs" ? 7 : ellipse.size === "sm" ? 13 : 15}
            className={`absolute ${positionClasses[ellipse.position]} ${sizeClasses[ellipse.size]}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className='relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center'>
        {/* Egg Shape */}
        <div className='absolute w-[90%] max-w-125 h-125 bg-white backdrop-blur-2xl rounded-[50%_50%_50%_50%/50%_50%_50%_50%] opacity-70' />

        <div className='z-20'>
          {/* Floating Logos */}
          <div className='pointer-events-none absolute inset-0'>
            {floatingLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`absolute ${positionClasses[logo.position]} ${sizeClasses[logo.position]}`}
              />
            ))}
          </div>

          {/* Typography */}
          <h1 className='text-3xl font-bold text-black sm:text-4xl lg:text-5xl xl:text-[52px] leading-tight'>
            Airbnb Assistants For
          </h1>
          <h2 className='mt-2 text-2xl font-normal text-black sm:text-3xl lg:text-4xl xl:text-[38px]'>
            Property Management
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-sm leading-relaxed px-4 sm:px-0 font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* CTA */}
          <div className='mt-8 flex flex-col items-center gap-4'>
            <Button className='group flex items-center justify-center gap-2 px-3 py-2.5 lg:px-4 lg:py-3 xl:px-4.5 xl:py-5.5 bg-[#ed3c6a] rounded-[5px] hover:bg-[#ED3C6A] transition-all duration-200 hover:scale-105 cursor-pointer'>
              <span className='font-bold text-white text-xs xl:text-sm whitespace-nowrap'>
                Schedule A Meeting
              </span>
              <ArrowRight className='w-3 h-3 xl:w-4 xl:h-4 transition-transform group-hover:translate-x-1' />
            </Button>
            <Link
              href={"#pricing"}
              className='text-sm text-black underline hover:text-[#ed3c6a] transition-colors duration-200'>
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
