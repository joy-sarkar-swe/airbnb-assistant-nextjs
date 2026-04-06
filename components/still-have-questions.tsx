import Image from "next/image";
import { Button } from "./ui/button";

export default function StillHaveQuestions() {
  return (
    <section className='w-full px-3 sm:px-4 md:px-8 lg:px-16 py-12 md:py-16'>
      <div className='w-full bg-[#f9fafb] rounded-2xl py-10 md:py-14 px-4 md:px-8 flex flex-col items-center gap-6 md:gap-8'>
        <div className='relative w-30 h-14'>
          <Image
            src='/still-have-questions/Avatar group.png'
            alt='Question Mark'
            fill
            unoptimized
            className='object-contain'
          />
        </div>

        <div className='flex flex-col w-full max-w-3xl items-center gap-2'>
          <h2 className='font-bold text-[#0f1728] text-xl tracking-[0] leading-7.5 text-center w-full'>
            Still have Questions?
          </h2>
          <p className='text-[#9c9c9c] text-lg text-center leading-7 font-normal tracking-[0] w-full'>
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>
        </div>

        <Button className='h-auto px-4.5 py-2.5 bg-[#ed3c6a] hover:bg-[#d4325d] text-white text-base font-medium leading-6 tracking-[0] rounded-lg shadow-shadow-xs'>
          Get in touch
        </Button>
      </div>
    </section>
  );
}
