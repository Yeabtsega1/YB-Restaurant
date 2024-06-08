// import { createContext, useState } from "react";

// export const CartContext = createContext({
//     cartItems: [],
//     setCartItems: ()=>null,
// });

// export default function CartProvider({children}) {
//     const [cartItems, setCartItems] = useState([]);
//     const value = {cartItems, setCartItems};

//     return <CartContext.Provider value={value}>{children}</CartContext.Provider>
// }

// CartContext.js



// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotal] = useState(0); // [1
//   const updateCartItems = (newItems) => {
//     setCartItems(newItems);
//     calculateTotalPrice(newItems);
//     // console.log('Updated Cart Items:', newItems);
//   };
//     const calculateTotalPrice = (items) => {
//         const totalPrice = items.reduce((total, item) => total + item.totalPrice, 0);
//         setTotal(totalPrice);
//     };

//   return (
//     <CartContext.Provider value={{ cartItems, setCartItems, updateCartItems, totalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;


import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Calculate the total price whenever cartItems change
  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => total + item.food_price * item.quantity, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const updateCartItems = (newItems) => {
    setCartItems(newItems);
    console.log('Updated Cart Items:', newItems);
  };

  // Add totalPrice state to the context
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems,setCartItems, updateCartItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

