import styles from './ItemSpotlight.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import FoodItems from '../../data/Food';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ItemSpotlight = (props) => {
  const Ctx = useContext(CartContext);

  const border = (color) => {
    switch (color) {
      case 'red':
        return styles.red;
      case 'blue':
        return styles.blue;
      case 'yellow':
        return styles.yellow;
      case 'brown':
        return styles.brown;
      default:
        return;
    }
  };

  const getFood = (id) => {
    const existingIndex = FoodItems.findIndex((item) => item.id === id);
    const tempFood = FoodItems[existingIndex];

    return {
      id: tempFood.id,
      name: tempFood.title,
      img: tempFood.img,
      price: tempFood.price,
      desc: tempFood.desc,
      color: border(tempFood.color),
    };
  };

  const params = useParams();
  const food = getFood(params.id);

  const addHandler = () => {
    Ctx.addItem({
      id: food.id,
      name: food.title,
      amount: 1,
      img: food.img,
      price: food.price,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.miniContainer}>
        <h1 className={styles.title}>{food.name}</h1>
        <p className={styles.desc}>{food.desc}</p>
        <img
          className={[styles.image, border(food.color)].join(' ')}
          src={food.img}
          alt="food"
        />

        <div className={styles.buttons}>
          <NavLink to="/food">
            <div className={styles.button} onClick={props.back}>
              Back
            </div>
          </NavLink>
          <div className={styles.button} onClick={addHandler}>
            +${food.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSpotlight;
