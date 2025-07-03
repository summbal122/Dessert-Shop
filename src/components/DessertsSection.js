import { EnhancedDessertComponent } from "./DessertComponent";
import desserts from "../utils/data";
import { useSelector } from "react-redux";
import lang from "../languageConstants";

const DessertsSection = () => {
  const langValue = useSelector(store => store.lang.lang)
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-10 2xl:gap-15 pb-15">
      {/* SVG heading */}
      <svg viewBox="0 0 230 90" className="w-xs 2xl:w-2xl">
        <path
          d="M 60 80 Q 45 60 75 60 Q 80 30 110 50 Q 125 20 140 50 Q 160 50 150 65 Q 170 70 160 90 H 80 Q 50 90 60 80 Z"
          fill="#f3dfdfcc"
          strokeLinejoin="round"
        />
        <text
          x="110"
          y="75"
          textAnchor="middle"
          alignmentBaseline="middle"
          className="fill-pink-700 font-Cookie font-semibold"
          fontSize="14"
        >
          {lang[langValue].desserts}
        </text>
      </svg>

      {/* Dessert Grid */}
      <div className="w-11/12 lg:w-7/8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-2 gap-y-4 md:gap-4 lg:gap-y-6 lg:gap-x-2 2xl:gap-7">
        <EnhancedDessertComponent data={desserts} />
      </div>
    </div>
  );
};

export default DessertsSection;
