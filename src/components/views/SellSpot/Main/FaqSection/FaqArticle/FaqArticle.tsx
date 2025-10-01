import { FiPlus } from "react-icons/fi";

interface FaqItem {
  question: string;
  answer: string;
}

interface PropTypes {
  ITEMS: FaqItem[];
}

const styles = {
  container: "mx-auto w-full max-w-5xl grid gap-6",
  item: "border border-[#6d6cc8] rounded-lg bg-gradient-to-br from-[#c2c0ec]/20 to-card-[#040410] overflow-hidden hover:bg-[#1c1b2a]",
  summary:
    "cursor-pointer list-none px-8 py-6 font-bold flex justify-between items-center transition-colors",
  answer: "px-8 pb-6 pt-0 text-left",
  icon: "ml-2 text-[#6d6cc8]",
};

const FaqArticle = (props: PropTypes) => {
  const { ITEMS } = props;
  return (
    <div className={styles.container}>
      {ITEMS.map((item, index) => (
        <details key={index} className={styles.item}>
          <summary className={styles.summary}>
            {item.question}
            <FiPlus className={styles.icon} />
          </summary>
          <div className={styles.answer}>{item.answer}</div>
        </details>
      ))}
    </div>
  );
};

export default FaqArticle;
