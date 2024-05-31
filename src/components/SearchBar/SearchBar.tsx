import React, { useState, useContext, FormEvent, ChangeEvent } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

const SearchBar: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("SearchBar must be used within an AppProvider");
  }

  const { setProducts, setLoading } = context;
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={handleChange}
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
