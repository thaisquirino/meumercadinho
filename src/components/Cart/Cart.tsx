import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext, { ProductType } from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

const Cart: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Cart must be used within an AppProvider");
  }

  const { cartItems, isCartVisible } = context;

  // Calcule o preço total com tipagem explícita
  const totalPrice = cartItems.reduce((acc: number, item: ProductType) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem: ProductType) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
};

export default Cart;
