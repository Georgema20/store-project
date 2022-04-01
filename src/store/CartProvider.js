import CartContext from './cart-context';
import { useState, useReducer } from 'react';

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'clear') {
    return {
      items: [],
      totalAmount: 0,
    };
  }

  if (action.type === 'add') {
    const newAmount = state.totalAmount + action.item.price;

    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let newItems;

    if (existingIndex === -1) {
      newItems = state.items.concat(action.item);
    } else {
      let cartItem = state.items[existingIndex];
      let updatedItem = {
        ...cartItem,
        amount: cartItem.amount + 1,
      };
      newItems = [...state.items];
      newItems[existingIndex] = updatedItem;
    }

    return {
      items: newItems,
      totalAmount: newAmount,
    };
  }
  if (action.type === 'remove') {
    const newAmount = state.totalAmount - action.item.price;
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let cartItem = state.items[existingIndex];
    let updatedItem = {
      ...cartItem,
      amount: cartItem.amount - 1,
    };

    let newItems = [...state.items];
    newItems[existingIndex] = updatedItem;

    if (updatedItem.amount === 0) {
      newItems.splice(existingIndex, 1);
    }

    return {
      items: newItems,
      totalAmount: newAmount,
    };
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCart);

  const [num, setNum] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [prevCart, setPrevCart] = useState({ items: [], amount: 0 });
  const [email, setEmail] = useState('');
  const [shine, setShine] = useState(false);

  const addItemFunc = (item) => {
    dispatch({ type: 'add', item: item });
    setNum(num + 1);
    setShine(true);
    setTimeout(() => {
      setShine(false);
    }, 500);
  };

  const removeItemFunc = (item) => {
    dispatch({ type: 'remove', item: item });
    setNum(num - 1);
    setShine(true);
    setTimeout(() => {
      setShine(false);
    }, 500);
  };

  const clearCartFunc = () => {
    dispatch({ type: 'clear' });
    setNum(0);
  };

  const logOutFunc = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const changeNameFunc = (name) => {
    setName(name);
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    numInCart: num,
    addItem: addItemFunc,
    removeItem: removeItemFunc,
    loggedIn: isLoggedIn,
    logOutOrIn: logOutFunc,
    firstName: name,
    clearCart: clearCartFunc,
    changeName: changeNameFunc,
    prevCart: prevCart,
    changePrevCart: setPrevCart,
    email: email,
    setEmail: setEmail,
    shine: shine,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
