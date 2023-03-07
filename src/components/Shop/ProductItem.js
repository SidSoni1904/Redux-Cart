import Card from '../UI/Card';
import { cartActions } from '../../Store/Cart-Slice';
import { useDispatch } from 'react-redux';
const ProductItem = (props) => {
  const {id, title, price, description } = props;
  const dispatch = useDispatch()
  const addtocartHandler = () => {
    dispatch(cartActions.addItemCart({
        id,title,price,description
      }))    
  }
  return (
    <li className='item'>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className='price'>₹{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className='actions'>
          <button onClick={addtocartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
