import styles from './Header.module.css';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from './ProfilePic';
import CartContext from '../../store/cart-context';

const Header = (props) => {
  const Ctx = useContext(CartContext);

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.topLeft}>
          <ProfilePic profileFunc={props.profileFunc} />
          <h1 className={styles.title} onClick={props.pokeFunc}>
            Poke Place
          </h1>
        </div>
        <div
          className={
            Ctx.shine ? [styles.button, styles.shine].join(' ') : styles.button
          }
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={faCartShopping}
            onClick={props.cartFunc}
          />
          <h3 className={styles.number}>{Ctx.numInCart}</h3>
        </div>
      </header>
      <div className={styles.diagonal}></div>
    </div>
  );
};

export default Header;
