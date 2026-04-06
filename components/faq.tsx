"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running asap possible.",
  },
  {
    id: "item-2",
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time. If you need assistance with changing your plan, our support team is here to help you through the process.",
  },
  {
    id: "item-3",
    question: "What is your cancellation policy?",
    answer:
      "Don't worry, we offer a hassle-free cancellation policy. You can cancel your subscription at any time through your account settings.",
  },
  {
    id: "item-4",
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional information to your invoices including notes, terms, and custom details.",
  },
  {
    id: "item-5",
    question: "How does billing work?",
    answer:
      "Billing is simple and transparent. You will be billed monthly or annually depending on your plan.",
  },
  {
    id: "item-6",
    question: "How do I change my account email?",
    answer:
      "Go to account settings → Email → Update. Support is available if needed.",
  },
];

export default function FAQ() {
  return (
    <section className='w-full px-3 sm:px-4 md:px-8 lg:px-16 py-12 md:py-16'>
      <div className='w-full bg-[#f9fafb] rounded-2xl py-10 md:py-14 px-4 md:px-8'>
        {/* Header */}
        <div className='flex flex-col items-center gap-4 md:gap-5 mb-10 md:mb-14 text-center'>
          <h2 className='font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-3xl'>
            <span className='text-[#0f1728]'>Frequently asked </span>
            <span className='text-[#ed3c6a]'>questions</span>
          </h2>

          <p className='text-sm md:text-base lg:text-lg text-black max-w-3xl leading-relaxed'>
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* Accordion */}
        <div className='flex justify-center w-full'>
          <Accordion
            type='single'
            defaultValue='item-1'
            collapsible
            className='w-full max-w-3xl'>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={`${
                  index === 0 ? "" : "border-t border-[#bf204947]"
                }`}>
                <AccordionTrigger className='py-4 md:py-5 text-left hover:no-underline w-full'>
                  <span className='flex-1 font-bold text-black text-base md:text-lg leading-relaxed cursor-pointer'>
                    {item.question}
                  </span>
                </AccordionTrigger>

                <AccordionContent>
                  <p className='text-[#5f5f5f] text-sm md:text-base leading-relaxed pb-4 wrap-break-word whitespace-normal'>
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
