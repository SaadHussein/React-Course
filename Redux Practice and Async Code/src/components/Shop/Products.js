import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "My First Book",
    price: 6,
    description: "The First book I ever Wrote",
  },
  {
    id: "p2",
    title: "My Second Book",
    price: 5,
    description: "The Second book I ever Wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
