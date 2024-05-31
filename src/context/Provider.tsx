import React, { useState, ReactNode } from 'react';
import AppContext from './AppContext';

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
