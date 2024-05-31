import { ProductType } from '../context/AppContext';

interface APIResponse {
  results: ProductType[];
}

const fetchProducts = async (query: string): Promise<ProductType[]> => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data: APIResponse = await response.json();

  return data.results;
};

export default fetchProducts;
