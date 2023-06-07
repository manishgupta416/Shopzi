import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description:
      "The product category for men in an e-commerce app offers a wide range of clothing, footwear, accessories, grooming products, electronics, and sports gear tailored specifically for men's needs and preferences.",
    img: "https://media.istockphoto.com/id/1189091313/es/foto/hombre-guapo-comprando-ropa-nueva-en-la-tienda.jpg?s=612x612&w=0&k=20&c=ec3XseYNESc2y0MoneuhV4NrLJy6IybwLxOkQrrZDqs=",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description:
      "The product category for women in an e-commerce app offers a diverse selection of clothing, footwear, accessories, beauty products, electronics, and lifestyle items designed to cater to women's preferences and needs.",
    img: "https://media.istockphoto.com/id/1397185406/photo/portrait-of-woman-smiling-against-wall-with-palm-tree-shade.jpg?s=612x612&w=0&k=20&c=QnX-8KeN5NXpA00iDOHJ6usI0h8h69fbCmos2XRG78k=",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description:
      "The product category for kids in an e-commerce app offers a wide variety of clothing, toys, accessories, and other items specifically designed for children of different ages.",
    img: "https://media.istockphoto.com/id/1295801745/photo/cute-little-girl-with-hands-by-mouth-shouting-on-pink-background.jpg?b=1&s=612x612&w=0&k=20&c=VH-KyyluNvOIVOpbAsFNf27qY5hTZ8nzokK6dqPpUHQ=",
  },
  // {
  //   _id: uuid(),
  //   categoryName: "Mobiles",
  //   description:
  //     "The product category for kids in an e-commerce app offers a wide variety of clothing, toys, accessories, and other items specifically designed for children of different ages.",
  //     img:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
  // },
  {
    _id: uuid(),
    categoryName: "Electronics",
    description:
      "The electronics product category in an e-commerce app features a comprehensive range of devices, gadgets, and accessories for various electronic needs, including smartphones, laptops, televisions, headphones, and more.",
    img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: uuid(),
    categoryName: "Home Appliances",
    description:
      "The home appliance product category in an e-commerce app offers a diverse selection of essential appliances for households, including refrigerators, washing machines, dishwashers, vacuum cleaners, and more.",
    img: "https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?b=1&s=612x612&w=0&k=20&c=gkgvbE0sGmNs5xOWBlfhEXPENF2tqXzG2k5_svFAwLw=",
  },
];
