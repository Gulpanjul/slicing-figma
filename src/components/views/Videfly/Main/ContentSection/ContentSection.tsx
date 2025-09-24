import { CONTENT_ITEMS } from "./ContentSection.constant";
import ContentArticle from "./ContentArticle";

const sectionClasses = "flex flex-col w-full gap-4";
const headerClasses = "flex justify-between";
const titleClasses = "font-bold";
const linkButtonClasses = "font-medium text-xs text-[#703BE7] hover:underline";

const ContentSection = () => {
    return (
        <section className={sectionClasses}>
            <div className={headerClasses}>
                <h2 className={titleClasses}>Kelola Konten</h2>
                <button className={linkButtonClasses}>Lainnya</button>
            </div>
            <ContentArticle ITEMS={CONTENT_ITEMS} />
        </section>
    );
};

export default ContentSection;
