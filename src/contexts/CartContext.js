// REACT HOOKS
import { createContext, useState, useEffect } from "react";

// CREATE CONTEXT
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // CART STATE
  const [cart, setCart] = useState([]);

  // ITEM AMOUNT STATE
  const [itemAmount, setItemAmount] = useState(0);

  // TOTAL PRICE STATE
  const [total, setTotal] = useState(0);

  // SET TOTAL PRICE
  useEffect(() => {
    const total = cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0);
    setTotal(total);
  }, [cart]);

  // UPDATE THE AMOUNT
  useEffect(() => {
    const amount = cart.reduce((acc, cur) => acc + cur.amount, 0);
    setItemAmount(amount);
  }, [cart]);

  // ADD TO CART HANDLER
  const handleAddToCart = (product, id) => {
    // CREATING NEW PRODUCT ITEM WITH NEW AMOUNT PROPERTY INSIDE
    const newItem = { ...product, amount: 1 };

    // CHECK IF THE ITEM IS ALREADY IN THE CART
    const cartItem = cart.find((item) => item.id === id);

    // IF CART ITEM IS ALREADY IN THE CART
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // INCREASE AMOUNT HANDLER
  const handleIncreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    handleAddToCart(cartItem, id);
  };

  // DECREASE AMOUNT HANDLER
  const handleDecreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    // IF CART ITEM IS ALREADY IN THE CART
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      handleRemoveFromCart(id);
    }
  };

  // REMOVE FROM CART HANDLER
  const handleRemoveFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // CLEAR CART HANDLER
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        clearCart,
        handleIncreaseAmount,
        handleDecreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
