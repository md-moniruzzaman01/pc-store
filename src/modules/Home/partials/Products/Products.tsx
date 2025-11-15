import ProductCard from '../../../../common/productCard/ProductCard';
import { products } from './config/constants';

const Products = () => {
  return (
    <section className="mb-12 mt-14 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Featured Products</h2>
        <p className="text-gray-600">Pick up Your Favorite Products</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:mx-24">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
