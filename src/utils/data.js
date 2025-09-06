import D_1 from "../../images/donut.png";
import D_2 from "../../images/spiral-dessert.png";
import D_3 from "../../images/cheese-cake.webp";
import D_4 from "../../images/croissant.png";
import D_5 from "../../images/muffin.png";
import D_6 from "../../images/pie.png";
import D_7 from "../../images/lemon-tart.png";
import D_8 from "../../images/chocolate-cupcake.webp";
import D_9 from "../../images/cherry-cheese.webp";
import D_10 from "../../images/Strawberry-cupcake.png";
import D_11 from "../../images/cookie1.webp";
import D_12 from "../../images/cookie2.webp";
import D_13 from "../../images/cookie3.webp";
import D_14 from "../../images/cookie4.webp";
const desserts = [
  {
    img: D_1,
    price: 5.25,
    translations: {
      en: { title: "Pink Glazed Classic", desc: "The Pink Glazed Classic is a delightful and timeless treat that appeals to both the eyes and the taste buds." },
      de: { title: "Klassiker mit rosa Glasur", desc: "Der Klassiker mit rosa Glasur ist ein entzückender Leckerbissen, der sowohl das Auge als auch den Gaumen erfreut." },
      fr: { title: "Classique glacé rose", desc: "Le Classique glacé rose est une gourmandise délicieuse et intemporelle qui séduit autant les yeux que les papilles." },
    },
  },
  {
    img: D_2,
    price: 5.95,
    translations: {
      en: { title: "Golden Pretzel Swirl", desc: "A masterful blend of bakery craftsmanship and rich flavor with its intricate spiral shape." },
      de: { title: "Goldene Brezelspirale", desc: "Eine meisterhafte Mischung aus Bäckerkunst und reichhaltigem Geschmack in spiraliger Form." },
      fr: { title: "Tourbillon de bretzel doré", desc: "Un mélange magistral d'artisanat de boulangerie et de saveur riche avec une forme en spirale complexe." },
    },
  },
  {
    img: D_3,
    price: 5.75,
    translations: {
      en: { title: "Berry Burst Tart", desc: "A flavorful explosion of juicy raspberry goodness nestled in a buttery tart shell." },
      de: { title: "Beeren-Explosion Törtchen", desc: "Ein geschmackvoller Ausbruch saftiger Himbeeren in einer buttrigen Tarte-Schale." },
      fr: { title: "Tarte aux fruits rouges", desc: "Une explosion de saveurs aux framboises juteuses dans une croûte de tarte au beurre." },
    },
  },
  {
    img: D_4,
    price: 5.10,
    translations: {
      en: { title: "Croissant", desc: "Our Croissant dessert is a creative twist on the classic French pastry, reimagined as a cupcake." },
      de: { title: "Croissant-Kreation", desc: "Unser Croissant-Dessert ist eine kreative Abwandlung des klassischen französischen Gebäcks als Cupcake." },
      fr: { title: "Croissant revisité", desc: "Un dessert croissant original réinventé sous forme de cupcake." },
    },
  },
  {
    img: D_5,
    price: 5.40,
    translations: {
      en: { title: "Blueberry Bliss", desc: "Soft and fluffy, the cake is baked to perfection with bursts of joy in every bite." },
      de: { title: "Heidelbeertraum", desc: "Weich und fluffig – dieser Kuchen ist perfekt gebacken und voller Freude bei jedem Bissen." },
      fr: { title: "Délice aux myrtilles", desc: "Moelleux et léger, ce gâteau est cuit à la perfection et chaque bouchée est un bonheur." },
    },
  },
  {
    img: D_6,
    price: 6.85,
    translations: {
      en: { title: "Lemon Tart", desc: "A refreshingly elegant dessert balancing tangy citrus with delicate sweetness." },
      de: { title: "Zitronentarte", desc: "Ein erfrischend elegantes Dessert mit perfekter Balance aus Zitrusnote und Süße." },
      fr: { title: "Tarte au citron", desc: "Un dessert rafraîchissant et élégant alliant agrumes acidulés et douceur." },
    },
  },
  {
    img: D_7,
    price: 5.00,
    translations: {
      en: { title: "Classic Ring Donut", desc: "Golden and soft, this airy donut is glazed with a smooth sugar coating." },
      de: { title: "Klassischer Donut", desc: "Goldbraun und weich – dieser luftige Donut ist mit einer glatten Zuckerglasur überzogen." },
      fr: { title: "Donut classique", desc: "Doré et moelleux, ce donut aéré est nappé d’un glaçage sucré lisse." },
    },
  },
  {
    img: D_8,
    price: 5.35,
    translations: {
      en: { title: "Chocolate Cup", desc: "Soft cupcake baked with premium cocoa and the perfect hint of sweetness." },
      de: { title: "Schokoladen-Cupcake", desc: "Ein weicher Cupcake mit edlem Kakaopulver und perfekter Süße gebacken." },
      fr: { title: "Cupcake au chocolat", desc: "Un cupcake moelleux au cacao premium et une touche parfaite de sucre." },
    },
  },
  {
    img: D_9,
    price: 6.99,
    translations: {
      en: { title: "Berry Cheesecake", desc: "Rich cheesecake blended with vibrant flavor of juicy berries." },
      de: { title: "Beeren-Käsekuchen", desc: "Ein reichhaltiger Käsekuchen mit dem Geschmack saftiger Beeren." },
      fr: { title: "Cheesecake aux fruits rouges", desc: "Un cheesecake riche mêlé à la saveur vibrante des fruits rouges." },
    },
  },
  {
    img: D_10,
    price: 5.45,
    translations: {
      en: { title: "Strawberry Cream", desc: "Fluffy sponge infused with real strawberry puree, baked with love." },
      de: { title: "Erdbeercreme", desc: "Lockerer Teig mit echter Erdbeerpüree – mit Liebe gebacken." },
      fr: { title: "Crème à la fraise", desc: "Gâteau moelleux à la purée de fraise, cuit avec amour." },
    },
  },
  {
    img: D_11,
    type: "new",
    price: 6.75,
    translations: {
      en: { title: "Strawberry Stack", desc: "Fluffy pancake stack drizzled with honey and infused with strawberry essence." },
      de: { title: "Erdbeer-Stapel", desc: "Lockere Pfannkuchen mit Honig beträufelt und Erdbeeraroma verfeinert." },
      fr: { title: "Pile de fraises", desc: "Pancakes moelleux nappés de miel et infusés à la fraise." },
    },
  },
  {
    img: D_12,
    type: "new",
    price: 5.25,
    translations: {
      en: { title: "Choco Chip Cookie", desc: "Golden, gooey center filled with oversized chunks of rich chocolate." },
      de: { title: "Schoko-Chip-Keks", desc: "Goldbraun mit weichem Kern und großen Schokostücken." },
      fr: { title: "Cookie aux pépites de chocolat", desc: "Doré et moelleux, rempli de gros morceaux de chocolat riche." },
    },
  },
  {
    img: D_13,
    type: "new",
    price: 5.35,
    translations: {
      en: { title: "Rainbow Cookie", desc: "Frosted cookie topped with rainbow-colored candy sprinkles." },
      de: { title: "Regenbogenkeks", desc: "Keks mit Zuckerguss und bunten Streuseln." },
      fr: { title: "Cookie arc-en-ciel", desc: "Cookie glacé garni de vermicelles colorés." },
    },
  },
  {
    img: D_14,
    type: "new",
    price: 5.60,
    translations: {
      en: { title: "Choco Frosted Bomb", desc: "Soft-baked cookie with gooey chocolate center and thick frosting." },
      de: { title: "Schoko-Frost-Bombe", desc: "Weicher Keks mit schokoladigem Kern und dicker Glasur." },
      fr: { title: "Bombe chocolat glacée", desc: "Cookie moelleux avec cœur fondant au chocolat et glaçage épais." },
    },
  },
];


export default desserts;
