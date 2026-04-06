import Marquee from "react-fast-marquee";

export default function TrustedIndustries() {
  const logos = [
    "air-bnb",
    "booking",
    "vrbo",
    "trip",
    "agoda",
    "expedia",
    "home-to-go",
  ];

  return (
    <section className='mt-12.5 mb-13.75 overflow-hidden'>
      <h2 className='font-semibold text-center mb-9 text-xl'>
        Trusted by leaders in 50+ industries
      </h2>

      <Marquee className='py-5 bg-[#F6F6F6]'>
        {[...logos, ...logos].map((name, idx) => (
          <img
            key={idx}
            src={`/trusted-industries/${name}.svg`}
            alt={name}
            className='h-8.5 inline-block mr-15 last:mr-15'
          />
        ))}
      </Marquee>
    </section>
  );
}
