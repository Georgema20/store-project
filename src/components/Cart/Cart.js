import styles from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import FireStore from '../../FireStore/FireStore';

const Cart = (props) => {
  const Ctx = useContext(CartContext);

  const FS = new FireStore();

  const addHandler = (item) => {
    Ctx.addItem(item);
  };

  const removeHandler = (item) => {
    Ctx.removeItem(item);
  };

  const submitHandler = () => {
    if (Ctx.loggedIn) {
      FS.sendData({ items: Ctx.items, amount: Ctx.totalAmount }, Ctx.email);
      Ctx.changePrevCart({ items: Ctx.items, amount: Ctx.totalAmount });
    }

    Ctx.clearCart();
  };

  let Items = Ctx.items;
  let Amount = Ctx.totalAmount;

  if (props.prev === 'true') {
    Items = Ctx.prevCart.items;
    Amount = Ctx.prevCart.amount;
  }

  console.log(Items);

  const cartItems = (
    <ul className={styles.items}>
      {Items.map((item) => {
        return (
          <li className={styles.item} key={item.id}>
            <div className={styles.imageContainer}>
              <h3>{item.amount}x</h3>
              <img src={item.img} alt={item.name} />
            </div>
            <h3 className={styles.name}>{item.name}</h3>
            <h3 className={styles.price}>${item.amount * item.price}</h3>
            {props.prev === 'true' ? (
              ' '
            ) : (
              <div>
                <h3
                  className={styles.addSub}
                  onClick={() => {
                    addHandler({
                      id: item.id,
                      name: item.title,
                      amount: 1,
                      img: item.img,
                      price: item.price,
                    });
                  }}
                >
                  +
                </h3>
                <h3
                  className={styles.addSub}
                  onClick={() => {
                    removeHandler({
                      id: item.id,
                      name: item.title,
                      amount: 1,
                      img: item.img,
                      price: item.price,
                    });
                  }}
                >
                  -
                </h3>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={styles.container}>
      {Ctx.items.length > 0 || props.prev === 'true' ? (
        <div className={styles.smallContainer}>
          {cartItems}

          <div className={styles.buttonsContainer}>
            {props.prev === 'true' ? (
              ''
            ) : (
              <div className={styles.buttonClose} onClick={props.cartFunc}>
                Close
              </div>
            )}
            <h3>
              Total Amount: <span>${Amount}.00</span>
            </h3>
            {props.prev === 'true' ? (
              ' '
            ) : (
              <div className={styles.buttonOrder} onClick={submitHandler}>
                Order
              </div>
            )}
          </div>
          {props.prev === 'true' ? (
            ' '
          ) : (
            <div className={styles.buttonClear} onClick={Ctx.clearCart}>
              Clear Cart
            </div>
          )}
        </div>
      ) : (
        <div className={styles.smallContainerNoOrders}>
          <h1>You have not ordered anything yet...</h1>
          <p>Please order something!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
