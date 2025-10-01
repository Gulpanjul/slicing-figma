"use client";

import { FAQ_ITEMS } from "./FaqSection.constant";
import FaqArticle from "./FaqArticle";

const style = {
  section: "container mx-auto text-center my-20",
  headerWrapper: "max-w-xl mx-auto mb-16",
  heading: "text-4xl font-bold mb-6",
  description: "text-base",
};

const FaqSection = () => {
  return (
    <section className={style.section}>
      <div className={style.headerWrapper}>
        <h2 className={style.heading}>Frequently Asked Questions</h2>
        <p className={style.description}>
          Do you need some help with something or do you have questions about
          some features?
        </p>
      </div>

      <FaqArticle ITEMS={FAQ_ITEMS} />
    </section>
  );
};

export default FaqSection;
