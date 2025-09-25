import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface PropTypes {
    ITEMS: {
        question: string;
        answer: string;
    }[];
}

const style = {
    div: "mx-auto w-full max-w-5xl grid grid-cols-1 gap-6",
    divbBackground:
        "bg-gradient-to-br from-[#c2c0ec]/20 to-card-[#040410] border-[#6d6cc8] rounded-lg",
    disclosureButton:
        "group flex w-full justify-between rounded-lg px-8 py-[1.375rem] text-left font-bold border-[#6d6cc8] focus:outline-none focus-visible:ring focus-visible:ring-[#6d6cc8]/75",
    disclosurePanel: "px-8 text-left pb-[1.375rem] pt-4",
};

const FaqArcticle = (props: PropTypes) => {
    const { ITEMS } = props;
    return (
        <div className={style.div}>
            {ITEMS.map((item, index) => (
                <Disclosure key={index}>
                    {({ open }) => (
                        <div
                            className={`${style.divbBackground} ${open ? "border" : ""}`}
                        >
                            <DisclosureButton
                                className={`${style.disclosureButton} ${open ? "" : "border"}`}
                            >
                                <span>{item.question}</span>
                                {open ? (
                                    <FiMinus size={20} />
                                ) : (
                                    <FiPlus size={20} />
                                )}
                            </DisclosureButton>
                            <DisclosurePanel className={style.disclosurePanel}>
                                {item.answer}
                            </DisclosurePanel>
                        </div>
                    )}
                </Disclosure>
            ))}
        </div>
    );
};

export default FaqArcticle;
