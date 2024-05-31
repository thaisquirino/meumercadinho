import React, { useContext } from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext, { ProductType } from '../../context/AppContext';

interface CartItemProps {
  data: ProductType;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("CartItem must be used within an AppProvider");
  }

  const { cartItems, setCartItems } = context;
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
