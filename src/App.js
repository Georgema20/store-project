import styles from './App.module.css';
import Header from './components/Layout/Header';
import ItemContainer from './components/Layout/ItemContainer';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';
import ProfilePage from './components/Profile/ProfilePage';
import React, { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [cartActive, setCartActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

  const cartOpenHandler = () => {
    setCartActive(true);
    setProfileActive(false);
  };

  const cartCloseHandler = () => {
    setCartActive(false);
    setProfileActive(false);
  };

  const profileOpenHandler = () => {
    setCartActive(false);
    setProfileActive(true);
  };

  const defaultOpenHandler = () => {
    setCartActive(false);
    setProfileActive(false);
  };

  let content = <ItemContainer />;

  if (cartActive) {
    content = <Cart cartFunc={cartCloseHandler} prev="false" />;
  }

  if (profileActive) {
    content = <ProfilePage />;
  }

  return (
    <CartProvider>
      <div className={styles.container}>
        <Header
          cartFunc={cartOpenHandler}
          profileFunc={profileOpenHandler}
          pokeFunc={defaultOpenHandler}
        />
        {content}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
