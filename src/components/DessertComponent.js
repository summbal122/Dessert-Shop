import { useSelector, useDispatch } from "react-redux";
import languageConst from "../languageConstants"; // ✅ consistent naming
import { addItem } from "../utils/cartSlice";

export const DessertComponent = ({ data }) => {
  const dispatch = useDispatch();
  const langValue = useSelector((store) => store.lang.lang);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="relative bg-light-blue h-55 md:h-72 2xl:h-130 py-4 lg:py-2 px-1 lg:p-4 2xl:p-8 rounded-xl text-center place-items-center shadow-xl"
        >
          {/* Badge */}
          {item.newLabel && (
            <span className="absolute top-2 left-2 bg-purple-text text-white text-[8px] md:text-xs lg:text-sm 2xl:text-lg px-2 py-0.5 rounded-md z-10 animate-pulse">
              {languageConst[langValue].new}
            </span>
          )}
        <div className="mb-2 md:mb-5 2xl:mb-14">
          <img
            className="w-12 h-16 md:w-25 md:h-28 2xl:w-35 2xl:h-40 2xl:mb-3"
            alt={item.translations[langValue].title}
            src={item.img}
          />
          <span className="text-xs md:text-sm 2xl:text-2xl text-pink-600 font-semibold">${item.price}</span> 
          </div>
          <h2 className="text-xs md:text-sm lg:text-lg leading-5 2xl:leading-9 2xl:text-3xl font-bold font-Doppio my-1 lg:my-2 2xl:my-4">
            {item.translations[langValue].title}
          </h2>
          <p className="text-[9px] md:text-xs lg:text-md 2xl:text-2xl mb-10 2xl:mb-10">
            {item.translations[langValue].desc}
          </p>
          <span
            onClick={() => handleAddItem(item)}
            className="absolute bottom-2 right-2 2xl:bottom-4 2xl:right-4 bg-pink-700 px-2 2xl:px-3.5 2xl:py-1.5 py-0.5 rounded-md text-primary font-semibold text-end text-xs md:text-sm 2xl:text-3xl cursor-pointer"
          >
            +
          </span>
        </div>
      ))}
    </>
  );
};

// ✅ HOC to add "newLabel" property
const withNewBadge = (WrappedComponent) => {
  return ({ data }) => {
    const updatedData = data.map((item) => ({
      ...item,
      newLabel: item.type === "new",
    }));

    return <WrappedComponent data={updatedData} />;
  };
};

export const EnhancedDessertComponent = withNewBadge(DessertComponent);
