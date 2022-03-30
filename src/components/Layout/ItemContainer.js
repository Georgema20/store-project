import styles from './ItemContainer.module.css';
import Item from '../Item/Item.js';
import FoodItems from '../../data/Food';
import FoodInput from './FoodInput';
import React, { useState } from 'react';

const ItemContainer = () => {
  const [type, setType] = useState('everything');

  const changeHandler = (e) => {
    setType(e.target.value);
  };

  let filteredFoodItems = FoodItems;

  switch (type) {
    case 'bowls':
      filteredFoodItems = FoodItems.filter((food) => {
        if (food.type === 'bowls') {
          return true;
        }
        return false;
      });
      break;
    case 'dumplings':
      filteredFoodItems = FoodItems.filter((food) => {
        if (food.type === 'dumplings') {
          return true;
        }
        return false;
      });
      break;
    case 'soups':
      filteredFoodItems = FoodItems.filter((food) => {
        if (food.type === 'soups') {
          return true;
        }
        return false;
      });
      break;
    case 'beverages':
      filteredFoodItems = FoodItems.filter((food) => {
        if (food.type === 'beverages') {
          return true;
        }
        return false;
      });
      break;
    default:
      break;
  }

  return (
    <div>
      <FoodInput changeHandler={changeHandler} />
      <div className={styles.foodContainer}>
        {filteredFoodItems.map((FoodItem) => {
          return (
            <Item
              title={FoodItem.title}
              price={FoodItem.price}
              key={FoodItem.id}
              id={FoodItem.id}
              img={FoodItem.img}
              desc={FoodItem.desc}
              color={FoodItem.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemContainer;
