const style = {
  section: "h-[24.438rem] w-[28.563rem]",
  h1: "pb-[0.938rem] text-5xl font-medium",
  p: "pb-[2.5rem] text-lg",
  button: "bg-[#203271] px-[2.188rem] py-[0.938rem] text-[#FFFFFF]",
};

const MainSection = () => {
  return (
    <section className={style.section}>
      <h1 className={style.h1}>
        Get the healthcare you need, when you need it.
      </h1>
      <p className={style.p}>
        Manage all of your healthcare needs in one convenient place &minus; from
        booking appointments to tracking your health history.
      </p>
      <button className={style.button}>Book an Appointment</button>
    </section>
  );
};

export default MainSection;
