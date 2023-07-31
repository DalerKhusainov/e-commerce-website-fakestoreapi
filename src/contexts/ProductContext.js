// REACT HOOKS
import React, { createContext, useState, useEffect } from "react";

// CREATE CONTEXT
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // PRODUCT STATE
  const [products, setProducts] = useState([]);

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
