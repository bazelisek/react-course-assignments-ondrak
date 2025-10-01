import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cart = useSelector(state => state.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.contents.map( item =>{
          return(
            <CartItem item={{
              title: item.item.title, 
              quantity: item.amount, 
              total: item.amount * item.item.price, 
              price: item.item.price,
              item: item.item
            }} 
            key={item.item.title}
            />
          )
        })}
      </ul>
    </Card>
  );
};

export default Cart;
