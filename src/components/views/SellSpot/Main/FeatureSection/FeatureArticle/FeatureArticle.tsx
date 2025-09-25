interface PropTypes {
    ITEMS: {
        icon: React.ReactNode;
        title: string;
        description: string;
    }[];
}

const styles = {
    article: "mt-20 grid grid-cols-3 gap-12",
    div: "text-left bg-gradient-to-b from-[#242333] to-[#040410] border border-[#242333] rounded-xl p-[1.563rem]",
    icon: "bg-[#3F3E4E] w-fit p-2.5 rounded-md mb-[1.125rem]",
    h3: "mb-[1.125rem] text-lg font-semibold",
};

const FeatureArticle = (props: PropTypes) => {
    const { ITEMS } = props;
    return (
        <article className={styles.article}>
            {ITEMS.map((item, index) => (
                <div key={index} className={styles.div}>
                    <div className={styles.icon}>{item.icon}</div>
                    <h3 className={styles.h3}>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </article>
    );
};

export default FeatureArticle;
