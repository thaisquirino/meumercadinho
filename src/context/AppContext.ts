import { createContext } from 'react';

export interface ProductType {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  // Adicione outros campos conforme necessário
}

export interface AppContextType {
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  cartItems: ProductType[];
  setCartItems: (cartItems: ProductType[]) => void;
  isCartVisible: boolean;
  setIsCartVisible: (isVisible: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
