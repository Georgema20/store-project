import styles from './LoggedIn.module.css';
import Cart from '../Cart/Cart';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const LoggedIn = (props) => {
  const Ctx = useContext(CartContext);
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Hi {Ctx.firstName}!</h1>
      {Ctx.prevCart.items.length > 0 ? (
        <h2 className={styles.text}>Your last order was...</h2>
      ) : (
        <h2 className={styles.text}>
          Here, we track previous orders, but current you don't have any. Order
          something now!
        </h2>
      )}
      {Ctx.prevCart.items.length > 0 ? <Cart prev="true" /> : ''}
      <div className={styles.logout} onClick={props.logOut}>
        Log Out
      </div>
    </div>
  );
};

export default LoggedIn;
