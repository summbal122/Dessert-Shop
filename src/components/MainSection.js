import IMG from "../../images/sauce.png";

const MainSection = () => {
  return (
    <div className="bg-main min-h-screen ">
    <div className="flex items-center md:items-end justify-center min-h-screen">
      <button className="bg-secondary text-primary p-3 md:p-5 2xl:p-12 rounded-md 2xl:rounded-2xl md:mb-24 text-xs md:text-sm lg:text-lg 2xl:text-4xl">Explore Desserts</button>
    </div>
    <img
      className="w-screen absolute md:h-full top-0 md:mt-[-40px] "
       src={IMG} alt="main" />
    </div>
  );
};

export default MainSection;