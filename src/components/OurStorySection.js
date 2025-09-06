import IMG from "../../images/chef.webp";
import { useSelector } from "react-redux";
import lang from "../languageConstants";

const OurStorySection = () => {
  const langValue = useSelector(store => store.lang.lang)
  return (
    <section id="about">
    <div className="grid grid-cols-1 md:grid-cols-4  bg-main/80 p-10 px-5 lg:px-20 2xl:px-30 place-items-center ">
     <img className="w-36 md:w-lg 2xl:w-2xl col-span-2 "   src={IMG} loading="lazy"/>
      <div className="flex flex-col items-center gap-4 col-span-2">
        <div className="space-y-1 2xl:space-y-5 text-center ">
         <h1 className="text-xl md:ext-4xl 2xl:text-6xl font-bold">
          {lang[langValue].storyHeading}
         </h1>
         <h2 className="text-xs md:text-sm 2xl:text-xl">
          {lang[langValue].storySubHeading}
         </h2>
        </div>

        <p className="text-xs lg:text-lg 2xl:text-4xl">
         {lang[langValue].storyContent}
        </p>
      </div>

    </div>
    </section>
  )
}

export default OurStorySection;
