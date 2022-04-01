import styles from './App.module.css';
import Header from './components/Layout/Header';
import ItemContainer from './components/Layout/ItemContainer';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';
import ProfilePage from './components/Profile/ProfilePage';
import React from 'react';
import CartProvider from './store/CartProvider';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <CartProvider>
      <div className={styles.container}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/food" />
          </Route>
          <Route path="/food">
            <ItemContainer />
          </Route>
          <Route path="/cart">
            <div className={styles.cartContainer}>
              <Cart prev="false" />
            </div>
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
