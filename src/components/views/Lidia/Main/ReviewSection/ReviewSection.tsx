import Title from "~/components/ui/Lidia/Title";
import { REVIEW_ITEMS } from "./ReviewSection.constant";
import { IoMdPerson } from "react-icons/io";

const style = {
  container: "flex justify-between flex-wrap gap-8",
  card: `
    flex w-[366px] flex-col items-center text-center
    border border-[#DEDEDE] rounded-[10px] 
    shadow-[0_100px_80px_rgba(0,0,0,0.07),0_41.78px_33.42px_rgba(0,0,0,0.0503),0_22.34px_17.87px_rgba(0,0,0,0.0417),0_12.52px_10.02px_rgba(0,0,0,0.035),0_6.65px_5.32px_rgba(0,0,0,0.0283),0_2.77px_2.21px_rgba(0,0,0,0.0197)]
  `,
  avatarWrapper: `
    relative mt-[40px] h-[149px] w-[149px] 
    rounded-full border border-[#BDBDBD]
  `,
  message: "mt-[30px] mb-[25px] px-[58px] text-[#5E6282]",
  name: "text-[#23A6F0] font-semibold",
  status: "mt-[15px] mb-[46px] text-[#181E4B]",
};

const ReviewSection = () => {
  return (
    <section>
      <Title heading="Reviews" desc="💬• Reviews of Others" />

      <div className={style.container}>
        {REVIEW_ITEMS.map((item, index) => (
          <div key={index} className={style.card}>
            <div className={style.avatarWrapper}>
              <IoMdPerson
                size={100}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#BDBDBD]"
              />
            </div>
            <p className={style.message}>{item.message}</p>
            <p className={style.name}>{item.name}</p>
            <p className={style.status}>{item.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
