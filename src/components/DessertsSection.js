import D_1 from "../../images/donut.png";
import D_3 from "../../images/cheese-cake.png";
import D_4 from "../../images/croissant.png";
import D_5 from "../../images/muffin.png";
import D_6 from "../../images/pie.png";
import D_7 from "../../images/lemon-tart.png";
import D_8 from "../../images/chocolate-cupcake.png";
import D_9 from "../../images/cherry-cheese.png";
import D_10 from "../../images/Strawberry-cupcake.png";
import D_11 from "../../images/cookie1.png";
import D_12 from "../../images/cookie2.png";
import D_13 from "../../images/cookie3.png";
import D_14 from "../../images/cookie4.png";

const desserts = [
  {
    img: D_1,
    title: "Pink Glazed Classic",
    desc: "A timeless strawberry-glazed donut with playful sprinkle toppings.",
  },
  {
    img: D_10,
    title: "Golden Pretzel Swirl",
    desc: "A twisty baked delight with buttery layers and soft crunch.",
  },
  {
    img: D_3,
    title: "Berry Burst Tart",
    desc: "Juicy raspberry topping over a buttery tart base.",
  },
  {
    img: D_4,
    title: "Croissant",
    desc: "Fluffy coffee cupcake topped with creamy chocolate swirl.",
  },
  {
    img: D_5,
    title: "Blueberry Bliss",
    desc: "A soft cupcake bursting with fresh blueberry flavor.",
  },
  {
    img: D_6,
    title: "Citrus Cream Puff",
    desc: "Tangy lemon cream topped with whipped vanilla frosting.",
  },
  {
    img: D_7,
    title: "Classic Ring Donut",
    desc: "Light and airy ring donut glazed for that perfect bite.",
  },
  {
    img: D_8,
    title: "Almond Croissant",
    desc: "Flaky croissant filled with almond cream and toasted edges.",
  },
  {
    img: D_9,
    title: "Strawberry cake",
    desc: "Creamy cheesecake base topped with fresh berry compote.",
  },
  {
    img: D_10,
    title: "Cherry Cup Delight",
    desc: "Cherry-infused cupcake with whipped frosting and a cherry crown.",
  },
  {
    img: D_11,
    title: "Honey Butter Stack",
    desc: "Fluffy pancake stack drizzled with golden honey and butter.",
  },
  {
    img: D_12,
    title: "Vanilla Cream Bar",
    desc: "Soft bar-shaped treat filled with smooth vanilla cream.",
  },
  {
    img: D_13,
    title: "Chunky Chip Cookie",
    desc: "Classic cookie with oversized chocolate chunks for crunch.",
  },
  {
    img: D_14,
    title: "Candy Frosted Bomb",
    desc: "Round donut dipped in frosting and rainbow candy toppers.",
  },
,
];

const DessertsSection = () => {
  return (
    <div className="py-6 px-3 md:p-5 lg:p-15 flex flex-col items-center gap-5 lg:gap-14 2xl:gap-15">
      <h1 className="text-lg lg:text-3xl 2xl:text-5xl font-bold font-Doppio text-secondary">Explore Desserts</h1>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-5 2xl:gap-8 ">
        {desserts.map((item, index) => (
          <div key={index} className="bg-light-blue relative p-2 lg:p-4 2xl:p-8 rounded-xl text-center place-items-center shadow-xl">
            <img className="w-12 h-16 md:w-25 md:h-28 2xl:w-35 2xl:h-40" alt={item.title} src={item.img} />
            <h2 className="text-xs md:text-sm lg:text-lg 2xl:text-3xl font-bold font-Doppio my-2 2xl:my-4">
              {item.title}
            </h2>
            <p className="text-[8px] md:text-xs lg:text-md 2xl:text-2xl mb-8 2xl:mb-10">{item.desc}</p>
            <span className="absolute bottom-2 right-2 2xl:bottom-4 2xl:right-4 bg-secondary px-2 2xl:px-3.5 2xl:py-1.5 py-0.5 rounded-md text-primary font-semibold text-end text-xs md:text-sm 2xl:text-3xl cursor-pointer">
            +</span> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertsSection;