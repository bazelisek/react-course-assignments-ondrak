import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/store';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartContents = useSelector(state => state.cart.contents);

  function handleCartClick() {
    dispatch(cartActions.toggleVisibility());
  }

  return (
    <button onClick={handleCartClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartContents.length}</span>
    </button>
  );
};

export default CartButton;
