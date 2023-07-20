import { createContext, useContext, useReducer } from "react";
import Chance from "chance";// Move the import statement here
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
const chance = new Chance();

const Context = ({ children }) => {
  const generateProductData = () => {
    return {
      id: chance.guid(),
      name: chance.city(),
      price: chance.floating({ min: 100, max: 10000, fixed: 1 }),
      image: chance.avatar(),
      inStock: chance.pickone([0, 3, 5, 6, 7]),
      fastDelivery: chance.bool(),
      ratings: chance.pickone([1, 2, 3, 4, 5]),
    };
  };

  const products = [...Array(12)].map(() => generateProductData());

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
