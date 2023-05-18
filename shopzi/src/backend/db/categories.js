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
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description:
      "The product category for women in an e-commerce app offers a diverse selection of clothing, footwear, accessories, beauty products, electronics, and lifestyle items designed to cater to women's preferences and needs.",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description:
      "The product category for kids in an e-commerce app offers a wide variety of clothing, toys, accessories, and other items specifically designed for children of different ages.",
  },
  {
    _id: uuid(),
    categoryName: "Electronics",
    description:
      "The electronics product category in an e-commerce app features a comprehensive range of devices, gadgets, and accessories for various electronic needs, including smartphones, laptops, televisions, headphones, and more.",
  },
  {
    _id: uuid(),
    categoryName: "Home Appliances",
    description:
      "The home appliance product category in an e-commerce app offers a diverse selection of essential appliances for households, including refrigerators, washing machines, dishwashers, vacuum cleaners, and more.",
  },
];
