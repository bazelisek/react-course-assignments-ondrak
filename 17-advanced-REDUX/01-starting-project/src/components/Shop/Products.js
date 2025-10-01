import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ITEMS = [
  {
    title: "TEST",
    price: 6,
    description: "This is a first product - amazing!"
  },
  {
    title: "NewTest",
    price: 6,
    description: "This is a first product - amazing!"
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map(
          item => {
            return (
              <ProductItem 
                key={item.title}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            )
          }
        )}
      </ul>
    </section>
  );
};

export default Products;
