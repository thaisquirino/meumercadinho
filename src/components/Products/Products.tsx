import React, { useEffect, useContext } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext, { ProductType } from '../../context/AppContext';

const Products: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Products must be used within an AppProvider");
  }

  const { products, setProducts, loading, setLoading } = context;

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      setLoading(true);
      const response = await fetchProducts('notebook');
      setProducts(response);
      setLoading(false);
    };

    fetchAndSetProducts();
  }, [setProducts, setLoading]);

  return (
    loading ? <Loading /> : (
      <section className="products container">
        {products.map((product: ProductType) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
};

export default Products;
