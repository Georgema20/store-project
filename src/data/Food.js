import salmonPoke from '../images/salmonPoke.jpg';
import tunaPoke from '../images/tunaPoke.jpg';
import tofuPoke from '../images/tofuPoke.jpeg';
import chickenPoke from '../images/chickenPoke.jpeg';
import chickenGyoza from '../images/chickenGyoza.jpeg';
import porkGyoza from '../images/porkGyoza.jpeg';
import soupDumplings from '../images/soupDumplings.jpeg';
import eggDrop from '../images/eggDrop.jpeg';
import coke from '../images/coke.jpeg';
import sweetSour from '../images/sweetSour.jpeg';
import bubbleTea from '../images/bubbleTea.jpeg';
import icedCoffee from '../images/icedCoffee.jpeg';

class Food {
  constructor(title, price, id, img, desc, color, type) {
    this.title = title;
    this.price = price;
    this.id = id;
    this.img = img;
    this.desc = desc;
    this.color = color;
    this.type = type;
  }
}

const FoodItems = [
  new Food(
    'Salmon Poke Bowl',
    12,
    'a1',
    salmonPoke,
    'Organic Alaska imported raw salmon mixed with white rice, avocado, and lettuce',
    'yellow',
    'bowls'
  ),
  new Food(
    'Tuna Poke Bowl',
    11,
    'a2',
    tunaPoke,
    'Organic Japan imported Ahi Tuna mixed with radishes, mango, cucumber, edmame, and avocado, and carrots',
    'yellow',
    'bowls'
  ),
  new Food(
    'Tofu Poke Bowl',
    10,
    'a3',
    tofuPoke,
    'Organic Switzerland imported Tofu mixed with white rice, edmame, mango, radish, and sesame seeds',
    'yellow',
    'bowls'
  ),
  new Food(
    'Chicken Bowl',
    11,
    'a4',
    chickenPoke,
    'Organic Australian imported chicken thighs mixed with white rice, avocado, carrots, and cucumbers',
    'yellow',
    'bowls'
  ),
  new Food(
    'Chicken Gyozas',
    8,
    'a5',
    chickenGyoza,
    '8 golden cripsy chicken stuffed pan-fried gyozas. Made fresh everyday from scratch',
    'blue',
    'dumplings'
  ),
  new Food(
    'Pork Gyozas',
    8,
    'a6',
    porkGyoza,
    '8 golden cripsy pork stuffed pan-fried gyozas. Made fresh everyday from scratch',
    'blue',
    'dumplings'
  ),
  new Food(
    'Soup Dumplings',
    10,
    'blue',
    soupDumplings,
    '8 soup and pork stuffed Shanghai dumplings. Made fresh everyday from scratch',
    'blue',
    'dumplings'
  ),
  new Food(
    'Egg Drop Soup',
    5,
    'a8',
    eggDrop,
    'Our house specialty egg drop soup. Mixed with corn, carrots, and scallions',
    'red',
    'soups'
  ),
  new Food(
    'Sweet & Sour Soup',
    5,
    'a9',
    sweetSour,
    'A popular traditional sweet and sour soup. Includes bamboo, mushroom, and scallion',
    'red',
    'soups'
  ),
  new Food(
    'Mexican Coke',
    2,
    'a10',
    coke,
    'A thirst-quenching iconic beverage. Imported from Mexico',
    'brown',
    'beverages'
  ),
  new Food(
    'Bubble Tea',
    5,
    'a11',
    bubbleTea,
    'Ask for the flavor of the day. Our bubble tea has been voted #1 in this country for years running by my mom',
    'brown',
    'beverages'
  ),
  new Food(
    'Iced Coffee',
    3,
    'a12',
    icedCoffee,
    'Coffee beans imported from Kenya. A beverage iced to absolute perfection',
    'brown',
    'beverages'
  ),
];

export default FoodItems;
