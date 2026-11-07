export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  badge?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Panjabi Collection",
    image: "/images/products/01.jpeg",
    price: 1250,
    originalPrice: 1650,
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Elegant Panjabi",
    image: "/images/products/02.jpeg",
    price: 1150,
    originalPrice: 1500,
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Classic Panjabi",
    image: "/images/products/03.jpeg",
    price: 1350,
    originalPrice: 1750,
  },
  {
    id: 4,
    name: "Premium Design Panjabi",
    image: "/images/products/04.jpeg",
    price: 1250,
    originalPrice: 1600,
  },
  {
    id: 5,
    name: "Traditional Panjabi",
    image: "/images/products/05.jpeg",
    price: 1100,
    originalPrice: 1450,
  },
  {
    id: 6,
    name: "Exclusive Panjabi",
    image: "/images/products/06.jpeg",
    price: 1450,
    originalPrice: 1850,
  },
];
