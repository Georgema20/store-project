import styles from './Header.module.css';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from './ProfilePic';
import CartContext from '../../store/cart-context';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const Ctx = useContext(CartContext);

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.topLeft}>
          <NavLink to="/profile">
            <ProfilePic />
          </NavLink>
          <NavLink to="/food">
            <h1 className={styles.title}>Poke Place</h1>
          </NavLink>
        </div>
        <NavLink to="/cart">
          <div
            className={
              Ctx.shine
                ? [styles.button, styles.shine].join(' ')
                : styles.button
            }
          >
            <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
            <h3 className={styles.number}>{Ctx.numInCart}</h3>
          </div>
        </NavLink>
      </header>
      <div className={styles.diagonal}></div>
    </div>
  );
};

export default Header;
