"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FAQ_ITEMS } from "./FaqSection.constant";

const FaqSection = () => {
  const background = "bg-gradient-to-br from-light/20 to-card-secondary";
  return (
    <section className="container mx-auto text-center my-20">
      <div className="max-w-xl mx-auto mb-[4.375rem]">
        <h2 className="text-4xl font-bold mb-[1.625rem]">
          Frequently Asked Questions
        </h2>
        <p>
          Do you need some help with something or do you have question on some
          features?
        </p>
      </div>

      <div className="mx-auto w-full max-w-5xl grid grid-cols-1 gap-6">
        {FAQ_ITEMS.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div
                className={`${open ? "border" : ""} ${background} border-primary rounded-lg`}
              >
                <DisclosureButton
                  className={`group flex w-full justify-between rounded-lg px-8 py-[1.375rem] text-left font-bold border-primary focus:outline-none focus-visible:ring focus-visible:ring-primary/75 ${open ? "" : "border"}`}
                >
                  <span>{faq.question}</span>
                  {open ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </DisclosureButton>
                <DisclosurePanel className="px-8 text-left pb-[1.375rem] pt-4">
                  {faq.answer}
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
