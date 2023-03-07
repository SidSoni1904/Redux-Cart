import Card from '../UI/Card';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {

  const cartitems = useSelector(state => state.cart.items)
  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartitems.map((items) => (
          <CartItem
            key={items.id}
            item={{
              id: items.id,
              title: items.name,
              quantity: items.quantity,
              total: items.totalPrice,
              price: items.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
