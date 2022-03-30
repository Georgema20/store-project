import styles from './Item.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Item = (props) => {
  let color = (color) => {
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

  const Ctx = useContext(CartContext);

  const addHandler = () => {
    Ctx.addItem({
      id: props.id,
      name: props.title,
      amount: 1,
      img: props.img,
      price: props.price,
    });
  };

  return (
    <div className={color(props.color)}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.price}>${props.price}</div>
      <img className={styles.img} src={props.img} alt="food" />
      <div className={styles.addButton} onClick={addHandler}>
        +
      </div>
      <p className={styles.description}>{props.desc}</p>
    </div>
  );
};

export default Item;
