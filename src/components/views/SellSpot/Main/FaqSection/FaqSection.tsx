"use client";

import { FAQ_ITEMS } from "./FaqSection.constant";
import FaqArcticle from "./FaqArticle";

const style = {
    section: "container mx-auto text-center my-20",
    div: "max-w-xl mx-auto mb-[4.375rem]",
    h2: "text-4xl font-bold mb-[1.625rem]",
};

const FaqSection = () => {
    return (
        <section className={style.section}>
            <div className={style.div}>
                <h2 className={style.h2}>Frequently Asked Questions</h2>
                <p>
                    Do you need some help with something or do you have question
                    on some features?
                </p>
            </div>

            <FaqArcticle ITEMS={FAQ_ITEMS} />
        </section>
    );
};

export default FaqSection;
