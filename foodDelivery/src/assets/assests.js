import logo from "./logo_food1.png";
import bg from "./bg.jpeg";
import desserts from "./desserts.jpeg";
import rolls from "./rolls.jpeg";
import salad from "./salad.jpeg";
import sandwich from "./sandwich.jpeg";
import pizza from "./pizza.jpeg";
import pasta from "./pasta.jpeg";
import noodles from "./noodles.jpeg";
import seafood from "./seafood.jpeg";
import momos from "./momos.jpeg";
import iceCream from "./icecream.jpeg";
import drinks from "./drinks.jpeg";
import steak from "./steak.jpeg";
import soup from "./soup.jpeg";
import burger from "./burger.jpeg";
import biryani from "./biryani.jpeg";

import chocolate_cake from "./chocolate_cake.jpeg"
import fries from "./fries.jpeg";
import greek_salad from "./greek_salad.jpeg";
import margherita_pizza from "./margherita_pizza.jpeg";
import pasta_alfredo from "./pasta_alfredo.jpeg";
import pepperoni_pizza from "./pepperoni_pizza.jpeg";
import spaghetti_bolognese from "./spaghetti_bolognese.jpeg";
import veg_burger from "./veg_burger.jpeg";
import chicken_burger from "./chicken_burger.jpeg";
import caesar_salad from "./caesar_salad.jpeg";


export const assets = {
  logo,
  bg,
};

export const menu_list = [
  {
    menu_name: "Salad",
    menu_image: salad,
  },
  {
    menu_name: "Rolls",
    menu_image: rolls,
  },
  {
    menu_name: "Desserts",
    menu_image: desserts,
  },
  {
    menu_name: "Sandwich",
    menu_image: sandwich,
  },
  {
    menu_name: "Pizza",
    menu_image: pizza,
  },
  {
    menu_name: "Burger",
    menu_image: burger,
  },
  {
    menu_name: "Pasta",
    menu_image: pasta,
  },
  {
    menu_name: "Noodles",
    menu_image: noodles,
  },
  {
    menu_name: "Soup",
    menu_image: soup,
  },
  {
    menu_name: "Momos",
    menu_image: momos,
  },
  {
    menu_name: "Biryani",
    menu_image: biryani,
  },
  {
    menu_name: "Steak",
    menu_image: steak,
  },
  {
    menu_name: "Ice Cream",
    menu_image: iceCream,
  },
  {
    menu_name: "Drinks",
    menu_image: drinks,
  },
  {
    menu_name: "Seafood",
    menu_image: seafood,
  },
];
export const food_list = [
  {
    _id: "1",
    name: "Greek Salad",
    image: greek_salad,
    price: 12,
    description: "Fresh salad with feta cheese, olives, and vegetables",
    category: "Salad",
  },
  {
    _id: "2",
    name: "Caesar Salad",
    image: caesar_salad,
    price: 10,
    description: "Crispy lettuce with creamy Caesar dressing",
    category: "Salad",
  },
  {
    _id: "3",
    name: "Margherita Pizza",
    image: margherita_pizza,
    price: 18,
    description: "Classic pizza with tomato, mozzarella, and basil",
    category: "Pizza",
  },
  {
    _id: "4",
    name: "Pepperoni Pizza",
    image: pepperoni_pizza,
    price: 20,
    description: "Cheesy pizza topped with spicy pepperoni",
    category: "Pizza",
  },
  {
    _id: "5",
    name: "Veg Burger",
    image: veg_burger,
    price: 8,
    description: "Crispy veg patty burger with fresh veggies",
    category: "Burger",
  },
  {
    _id: "6",
    name: "Chicken Burger",
    image: chicken_burger,
    price: 10,
    description: "Juicy chicken patty burger with sauce",
    category: "Burger",
  },
  {
    _id: "7",
    name: "Pasta Alfredo",
    image: pasta_alfredo,
    price: 14,
    description: "Creamy white sauce pasta with herbs",
    category: "Pasta",
  },
  {
    _id: "8",
    name: "Spaghetti Bolognese",
    image: spaghetti_bolognese,
    price: 15,
    description: "Pasta with rich tomato and meat sauce",
    category: "Pasta",
  },
  {
    _id: "9",
    name: "Momos",
    image: momos,
    price: 6,
    description: "Steamed dumplings filled with vegetables or meat",
    category: "Snacks",
  },
  {
    _id: "10",
    name: "French Fries",
    image: fries,
    price: 5,
    description: "Crispy golden fried potato sticks",
    category: "Snacks",
  },
  {
    _id: "11",
    name: "Chocolate Cake",
    image: chocolate_cake,
    price: 9,
    description: "Rich and moist chocolate layered cake",
    category: "Dessert",
  },
  {
    _id: "12",
    name: "Ice Cream",
    image: iceCream,
    price: 4,
    description: "Cold and creamy dessert with various flavors",
    category: "Dessert",
  },
];