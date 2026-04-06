import Image from "next/image";

// Tools data
const toolsData = [
  {
    src: "/our-tools/image 11.png",
    imgClass: "w-[174px] h-[46px] object-cover",
    shadow: "shadow-[0px_4px_30.3px_#ff8aa847]",
  },
  {
    src: "/our-tools/image 12.png",
    imgClass: "w-[210px] h-[27px] object-cover",
    shadow: "",
  },
  {
    src: "/our-tools/image 13.png",
    imgClass: "w-[193px] h-[31px] object-cover",
    shadow: "",
  },
  {
    src: "/our-tools/image 14.png",
    imgClass: "w-[151px] h-14 object-cover",
    shadow: "",
  },
  {
    src: "/our-tools/image 15.png",
    imgClass: "w-[135px] h-[55px] object-cover",
    shadow: "",
  },
  {
    src: "/our-tools/image.png",
    imgClass: "w-[193px] h-[31px] object-cover",
    shadow: "",
  },
  {
    src: "/our-tools/image 14.png",
    imgClass: "w-[151px] h-14 object-cover",
    shadow: "",
  },
  {
    src: "/our-tools/image 15.png",
    imgClass: "w-[135px] h-[55px] object-cover",
    shadow: "",
  },
  {
    src: "/our-tools/image.png",
    imgClass: "w-[193px] h-[31px] object-cover",
    shadow: "",
  },
];

export default function OurTools() {
  return (
    <section className='w-full '>
      <div className='text-center mb-4'>
        <h2 className='font-bold text-transparent text-[32px] tracking-[0] leading-[normal]'>
          <span className='text-black'>Our </span>
          <span className='text-[#ed3c6a]'>Tools</span>
        </h2>
      </div>
      <p className='font-medium text-black text-center leading-[normal] text-sm tracking-[0] max-w-184.5 mx-auto mb-12'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      {/* Tools Grid */}
      <div className='w-full bg-[#f6f6f6] py-9.5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-230 mx-auto '>
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className={`w-72.5 h-34.75 flex items-center justify-center bg-[#ffffff] rounded-[11px] overflow-hidden ${tool.shadow} mx-auto`}>
              <Image
                className={tool.imgClass}
                alt={`Tool ${index + 1}`}
                src={tool.src}
                width={1000}
                height={1000}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
