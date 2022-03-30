import styles from './ItemSpotlight.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

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

  const addHandler = () => {
    Ctx.addItem({
      id: props.item.id,
      name: props.item.title,
      amount: 1,
      img: props.item.img,
      price: props.item.price,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.miniContainer}>
        <h1 className={styles.title}>{props.item.name}</h1>
        <p className={styles.desc}>{props.item.desc}</p>
        <img
          className={[styles.image, border(props.item.color)].join(' ')}
          src={props.item.img}
          alt="food"
        />

        <div className={styles.buttons}>
          <div className={styles.button} onClick={props.back}>
            Back
          </div>
          <div className={styles.button} onClick={addHandler}>
            +${props.item.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSpotlight;
