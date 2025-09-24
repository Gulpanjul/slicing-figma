import Scissor from "~/components/assets/Videfly/scissor.svg";
import Crosshair from "~/components/assets/Videfly/crosshair.svg";

interface TypeProps {
  ITEMS: {
    title: string;
    content: {
      label: string;
      type: string;
    }[];
  }[];
}

const articleClasses = "flex gap-6 px-6 w-full";
const cardClasses =
  "flex border border-[#ECECEC] px-4 rounded-2xl pt-[0.719rem] pb-[1.344rem] justify-between items-center relative overflow-hidden";
const labelClasses = "font-semibold text-xs";
const typeBaseClasses =
  "flex items-center capitalize w-fit px-2 py-1 rounded-md text-xs";
const buttonClasses =
  "p-2 bg-black/20 text-white rounded-lg hover:bg-black/40";

const getTypeClasses = (type: string) =>
  type === "video"
    ? "bg-[#FFD9D2] text-[#FE846F]"
    : "bg-[#BFE8FF] text-[#65B9E7]";

const getProgressWidth = (label: string) =>
  label === "Alchemist Fragrance" ? "w-[44%]" : "w-[72%]";

const ContentArticle = ({ ITEMS }: TypeProps) => {
  return (
    <article className={articleClasses}>
      {ITEMS.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 flex-1">
          <p>{item.title}</p>
          {item.content.map((content, idx) => (
            <div key={idx} className={cardClasses}>

              <div className="flex flex-col gap-1">
                <p className={labelClasses}>{content.label}</p>
                <p className={`${typeBaseClasses} ${getTypeClasses(content.type)}`}>
                  {content.type}
                </p>
              </div>

              <button className={buttonClasses}>
                {item.title === "Lanjutkan" ? <Scissor /> : <Crosshair />}
              </button>

              {item.title === "Lanjutkan" && (
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-[#703BE7] rounded-b-2xl ${getProgressWidth(
                    content.label
                  )}`}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </article>
  );
};

export default ContentArticle;