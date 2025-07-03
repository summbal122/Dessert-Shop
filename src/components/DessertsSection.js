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
    desc: "The Pink Glazed Classic is a delightful and timeless treat that appeals to both the eyes and the taste buds.",
  },
  {
    img: D_10,
    title: "Golden Pretzel Swirl",
    desc: "The Golden Pretzel Swirl is a masterful blend of bakery craftsmanship and rich flavor. Designed to impress with its intricate spiral shape",
  },
  {
    img: D_3,
    title: "Berry Burst Tart",
    desc: "The Berry Burst Tart is a flavorful explosion of juicy raspberry goodness nestled in a buttery tart shell.",
  },
  {
    img: D_4,
    title: "Croissant",
    desc: "This isn’t your everyday croissant—our Croissant dessert is a creative twist on the classic French pastry, reimagined as a cupcake.",
  },
  {
    img: D_5,
    title: "Blueberry Bliss",
    desc: "Blueberry Bliss is a cupcake that lives up to its name—every bite is a burst of joy. Soft and fluffy, the cake is baked to perfection .",
  },
  {
    img: D_6,
    title: "Lemon Tart",
    desc: "Refreshingly elegant dessert that strikes the perfect balance between tangy citrus and delicate sweetness.",
  },
  {
    img: D_7,
    title: "Classic Ring Donut",
    desc: "The Classic Ring Donut is a simple pleasure done to perfection. Golden and soft, this airy donut is glazed with a smooth sugar coating.",
  },
  {
    img: D_8,
    title: "Chocolate cup",
    desc: "This moist, soft cupcake is baked with premium cocoa powder and just the right touch of sweetness to create a deep, velvety chocolate base.",
  },
  {
    img: D_9,
    title: "Berry cheese cake",
    desc: "A luxurious dessert that combines the richness of classic cheesecake with the vibrant flavor of fresh, juicy berries.",
  },
  {
    img: D_10,
    title: "Strawberry cream",
    desc: "Baked with love and bursting with flavor, this cupcake features a light, fluffy sponge infused with real strawberry puree or essence, giving it a soft pink hue and a naturally sweet, fruity base.",
  },
  {
    img: D_11,
    title: "Strawberry Stack",
    desc: "Fluffy pancake stack drizzled with golden honey and butterThis thick, layered cookie is infused with sweet strawberry essence and features a soft, chewy texture that melts in your mouth.",
  },
  {
    img: D_12,
    title: "Choco chip cookie",
    desc: "Thick, golden-brown, and slightly crisp at the edges, this cookie boasts a soft, gooey center filled with oversized chunks of rich chocolate.",
  },
  {
    img: D_13,
    title: "Rainbow Cookie",
    desc: "This round cookie is generously coated in a thick, creamy layer of frosting, then topped with rainbow-colored candy sprinkles.",
  },
  {
    img: D_14,
    title: "Choco Frosted Bomb",
    desc: "This round, soft-baked cookie features a gooey chocolate center and is generously draped in thick chocolate frosting.",
  },
,
];

const DessertsSection = () => {
  return (
    <div className=" flex flex-col items-center gap-5 lg:gap-10 2xl:gap-15 pb-15">
<svg
  viewBox="0 0 230 90"
  className="w-xs 2xl:w-2xl"
>

  <path
    d="
      M 60 80
      Q 45 60 75 60
      Q 80 30 110 50
      Q 125 20 140 50
      Q 160 50 150 65
      Q 170 70 160 90
      H 80
      Q 50 90 60 80
      Z"
    
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
    Desserts
  </text>
</svg>

      <div className=" w-11/12 lg:w-10/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-4 2xl:gap-7 ">
        {desserts.map((item, index) => (
          <div key={index} className="bg-light-blue relative p-2 lg:p-4 2xl:p-8 rounded-xl text-center place-items-center shadow-xl">
            <img className="w-12 h-16 md:w-25 md:h-28 2xl:w-35 2xl:h-40" alt={item.title} src={item.img} />
            <h2 className="text-xs md:text-sm lg:text-lg 2xl:text-3xl font-bold font-Doppio my-2 2xl:my-4">
              {item.title}
            </h2>
            <p className="text-[8px] md:text-xs lg:text-md 2xl:text-2xl mb-8 2xl:mb-10">{item.desc}</p>
            <span className="absolute bottom-2 right-2 2xl:bottom-4 2xl:right-4 bg-pink-700 px-2 2xl:px-3.5 2xl:py-1.5 py-0.5 rounded-md text-primary font-semibold text-end text-xs md:text-sm 2xl:text-3xl cursor-pointer">
            +</span> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertsSection;