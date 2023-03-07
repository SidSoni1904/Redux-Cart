import ProductItem from './ProductItem';

const Dummy_products = [
  {
    id: "p1",
    price: 200,
    title: "T-shirt",
    description: "Zara original t-shirt",
  },
  {
    id: "p2",
    price: 120,
    title: "Shirt",
    description: "Zara original Shirt",
  },
  {
    id: "p3",
    price: 150,
    title: "Cap",
    description: "Zara original Cap",
  },
];
const Products = (props) => {
  return (
    <section className="products">
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
