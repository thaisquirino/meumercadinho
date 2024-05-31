import React, { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext, { ProductType } from '../../context/AppContext';

interface ProductCardProps {
  data: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { title, thumbnail, price } = data;
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("ProductCard must be used within an AppProvider");
  }

  const { cartItems, setCartItems } = context;

  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};

export default ProductCard;
