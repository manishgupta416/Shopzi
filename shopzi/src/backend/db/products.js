import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/z/3/7/xl-r-dark-grey-stoneberg-original-imaghghn2vcf5euv.jpeg?q=70",
    category: "Men",
    rating: "3.9",
    size: "L",
    description: "Men Navy Blue Slim Fit Tartan Checks Checked Casual Shirt",
    title: "HIGHLANDER",
    trending: false,
    original_price: "1199",
    price: "419",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/e/b/6/m-men-slim-fit-printed-spread-collar-casual-shirt-qugue-original-imagjhg2zhgu3fpa.jpeg?q=70",
    category: "Men",
    rating: "3.9",
    size: "M",
    description: "Men Regular Fit Printed Cut Away Collar Casual Shirt",
    title: "Qugue",
    trending: false,
    original_price: "1199",
    price: "600",
    delivery_time: "15",
    reviews: "4.5k",
    in_stock: true,
    discount:'40% OFF'
  },
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/l5h2xe80/shirt/7/s/h/xs-juhg-try-this-original-imagg4wyccyjm3jf.jpeg?q=70",
    category: "Men",
    rating: "3",
    size: "S",
    description: "Men Slim Fit Solid Mandarin Collar Casual Shirt",
    title: "Roadstar",
    trending: false,
    original_price: "1199",
    price: "199",
    delivery_time: "9",
    reviews: "3.0k",
    in_stock: false,
    discount:'40% OFF'
  },
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/612/612/l3os4280/shirt/f/8/x/xl-men-slim-fit-printed-spread-collar-casual-shirt-icome-original-imageqvkcjrvgmyb.jpeg?q=70",
    category: "Men",
    rating: "3.9",
    size: "L",
    description: "Men Regular Fit Printed Cut Away Collar Casual Shirt",
    title: "icome ",
    trending: false,
    original_price: "2199",
    price: "1419",
    delivery_time: "19",
    reviews: "4.8k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/3/h/t/32-36087-0622-levi-s-original-imagghdwhwqzzeu8.jpeg?q=70",
    category: "Men",
    rating: "3.9",
    size: "34",
    description: "512 Men Tapered Fit Mid Rise Black Jeans",
    title: "LEVIS",
    trending: false,
    original_price: "1199",
    price: "2239",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/m/y/8/32-mss22mjn334-metronaut-original-imagjwkpfbat4tgx.jpeg?q=70",
    category: "Men",
    rating: "3.9",
    size: "L",
    description: "Men Slim Mid Rise Grey Jeans",
    title: "METRONAUT By Flipkart  ",
    trending: false,
    original_price: "1699",
    price: "419",
    delivery_time: "19",
    reviews: "4.5k",
    in_stock: true,
    discount:'40% OFF'
  },
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/612/612/kfeamq80-0/jean/b/u/c/36-suplpsjean-lblue-supernova-inc-original-imafvvajnhrvpqhw.jpeg?q=70",
    category: "Men",
    rating: "3.9",
    size: "L",
    description: "Men Slim Mid Rise Light Blue Jeans",
    title: "Supernova Inc.   ",
    trending: false,
    original_price: "1299",
    price: "419",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },
  //women
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/ethnic-set/o/x/n/xl-kr-37-wine-kriska-original-imagmj8hgm9gcmmb.jpeg?q=70",
    category: "Women",
    rating: "3.9",
    size: "L",
    description: "Women Kurta and Pant Set Viscose Rayon",
    title: "Kriska    ",
    trending: false,
    original_price: "2499",
    price: "629",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/612/612/l0mr7gw0/ethnic-set/p/e/n/m-palazoo-set-kenix-world-original-imagcdtgh3ra7czp.jpeg?q=70",
    category: "Women",
    rating: "3.9",
    size: "L",
    description: "Women Top and Skirt Set Viscose Rayon",
    title: "Isha e Kart   ",
    trending: false,
    original_price: "1599",
    price: "447",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/kzogn0w0/kurta/p/b/h/s-ckm1096voilet-ckm-original-imagbmx5ywzhutm8.jpeg?q=70",
    category: "Women",
    rating: "3.9",
    size: "L",
    description: "Women Printed Viscose Rayon Straight Kurta  (Purple)",
    title: "CKM  ",
    trending: false,
    original_price: "1,=999",
    price: "383",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/l4u7vrk0/t-shirt/j/u/9/l-focus-adyavastram-original-imagfnk7vxjfggwp.jpeg?q=70",
    category: "Women",
    rating: "3.9",
    size: "L",
    description: "Women Typography Round Neck Purple T-Shirt",
    title: "Adyavastram  ",
    trending: false,
    original_price: "1099",
    price: "230",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/l432ikw0/t-shirt/1/r/0/s-printedwmn27-lasmo-original-imagf2fy8gzpnzg8.jpeg?q=70",
    category: "Women",
    rating: "3.9",
    size: "L",
    description: "Women Printed Round Neck Black T-Shirt",
    title: "Lasmo   ",
    trending: false,
    original_price: "649",
    price: "249",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  // kids

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/kfwvcsw0/kids-ethnic-set/y/a/a/6-7-years-s-109-green-pro-ethic-original-imafw92qrqed2tym.jpeg?q=70",
    category: "Kids",
    rating: "3.9",
    size: "L",
    description:
      "Boys Festive & Party Kurta and Churidar Set  (Green Pack of 1)",
    title: "PRO ETHIC    ",
    trending: false,
    original_price: "2499",
    price: "647",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/kids-ethnic-set/8/a/d/6-7-years-f-bright-garments-bbg-pkj-555-p-1-bright-garments-original-imaghpsdgxydrb5e.jpeg?q=70",
    category: "Kids",
    rating: "3.9",
    size: "L",
    description:
      "Boys Festive & Party, Wedding Kurta, Waistcoat and Pyjama Set  (Multicolor Pack of 1)",
    title: "Lasmo   ",
    trending: false,
    original_price: "999",
    price: "403",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/l432ikw0/t-shirt/1/r/0/s-printedwmn27-lasmo-original-imagf2fy8gzpnzg8.jpeg?q=70",
    category: "Kids",
    rating: "3.9",
    size: "L",
    description: "Women Printed Round Neck Black T-Shirt",
    title: "Lasmo   ",
    trending: false,
    original_price: "649",
    price: "249",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },
  // electronics
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70",
    category: "Mobiles",
    rating: "3.9",
    size: "L",
    description: "realme 10 Pro+ 5G (Nebula Blue, 128 GB)  (8 GB RAM)",
    title: "realme   ",
    trending: false,
    original_price: "27999",
    price: "25999",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/b/f/m/-original-imagna3ezkdusyrz.jpeg?q=70",
    category: "Mobiles",
    rating: "3.9",
    size: "L",
    description: "vivo V27 5G (Magic Blue, 256 GB)  (12 GB RAM)",
    title: "vivo   ",
    trending: false,
    original_price: "40999",
    price: "36999",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/f/o/z/11r-5g-5011102527-oneplus-original-imagn3bqgfz8yhss.jpeg?q=70",
    category: "Mobiles",
    rating: "3.9",
    size: "L",
    description: "OnePlus 11R 5G (Galactic Silver, 256 GB)  (16 GB RAM)",
    title: "OnePlus    ",
    trending: false,
    original_price: "44999",
    price: "44616",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },
  {
    _id: uuid,
    image: "https://m.media-amazon.com/images/I/51k9Z7lH2VL._MCnd_AC_.jpg",
    category: "Mobiles",
    rating: "3.9",
    size: "L",
    description: "iQOO Neo 6 5G",
    title: "OnePlus    ",
    trending: false,
    original_price: "34999",
    price: "24999",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  // laptop

  {
    _id: uuid,
    image: "https://m.media-amazon.com/images/I/710TJuHTMhL._SX679_.jpg",
    category: "Electronics",
    rating: "3.9",
    size: "L",
    description: "Apple 2022 MacBook Air Laptop with M2 chip",
    title: "Apple    ",
    trending: false,
    original_price: "119900",
    price: "106990",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/computer/e/6/0/-original-imagp7pgftd3zehz.jpeg?q=70",
    category: "Electronics",
    rating: "3.9",
    size: "L",
    description: "HP 14s Intel Core i5 12th Gen",
    title: "HP    ",
    trending: false,
    original_price: "75191",
    price: "60990",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/computer/j/m/2/-original-imagpa5gadtkbm6y.jpeg?q=70",
    category: "Electronics",
    rating: "3.9",
    size: "L",
    description: "Lenovo IdeaPad 3 Intel Core i5 12th Gen",
    title: "Lenovo    ",
    trending: false,
    original_price: "82490",
    price: "60990",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/l2urv680/computer/a/v/k/-original-image333jzhyzhyt.jpeg?q=70",
    category: "Electronics",
    rating: "3.9",
    size: "L",
    description: "ASUS Vivobook S14 OLED Intel EVO H-Series Core i5 12th Gen",
    title: "ASUS    ",
    trending: false,
    original_price: "92990",
    price: "72990",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  // shoes
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=70",
    category: "Men",
    rating: "3.9",
    size: "L",
    description:
      "Lightweight,Comfort,Summer,Trendy,Walking,Outdoor,Stylish,Training,Daily Use Sneakers For Men  (White, Black, Red)",
    title: "aadi    ",
    trending: false,
    original_price: "1999",
    price: "299",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/l1fc0i80/slipper-flip-flop/2/c/m/8-bw-011-blu-bw-010-mrn-bizwiz-blue-maroon-original-imagcztt2rwsdkgz.jpeg?q=70",
    category: "Women",
    rating: "3.9",
    size: "L",
    description: "Slippers  (Blue, Maroon 5)",
    title: "Feens     ",
    trending: false,
    original_price: "999",
    price: "189",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },
  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-sandal/t/n/c/8c-svr6402kbrv-svaar-original-imagzqkc7gkztdmm.jpeg?q=70",
    category: "Kids",
    rating: "3.9",
    size: "L",
    description: "Sling Back Clogs For Boys & Girls  (Pink)",
    title: "Svaar     ",
    trending: false,
    original_price: "1499",
    price: "524",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/bootie/k/m/s/-original-imagg4kajhfkugpb.jpeg?q=70",
    category: "Kids",
    rating: "3.9",
    size: "L",
    description: "LMN Child Care Booties  ",
    title: "LMN Child Care",
    trending: false,
    original_price: "599",
    price: "199",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  // appliances

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/television/5/c/k/-original-imaggsnkne4n5mvh.jpeg?q=70",
    category: "Home Appliances",
    rating: "3.9",
    size: "L",
    description:
      "Mi X Series 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Dolby Vision and 30W Dolby Audio (2022 Model) ",
    title: "Mi X Series",
    trending: false,
    original_price: "42999",
    price: "26999",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/jz30nm80/otg-new/y/r/h/hd6975-philips-25-original-imafj6b46f3mkfzp.jpeg?q=70",
    category: "Home Appliances",
    rating: "3.9",
    size: "L",
    description:
      "PHILIPS 25-Litre HD6975/00(882697500010 Oven Toaster Grill (OTG) with Motorised Rotisserie,Opti Temp Technology  (Grey) ",
    title: "PHILIPS Oven Toaster",
    trending: false,
    original_price: "11995",
    price: "7999",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },

  {
    _id: uuid,
    image:
      "https://rukminim1.flixcart.com/image/832/832/jws547k0/water-purifier/4/e/4/lg-ww172ep-original-imafhefvnkc3vswu.jpeg?q=70",
    category: "Home Appliances",
    rating: "3.9",
    size: "L",
    description:
      "LG WW172EP 8 L RO + UV Water Purifier Dual Protection Airtight Stainless Steel Tank, Mineral Booster with Multi Stage Filtration Process and Digital Sterilization care  (Red)  ",
    title: "LG  Water Purifier",
    trending: false,
    original_price: "30990",
    price: "27799",
    delivery_time: "9",
    reviews: "4.0k",
    in_stock: true,
    discount:'40% OFF'
  },
];
