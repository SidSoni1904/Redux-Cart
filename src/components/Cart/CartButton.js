import { useDispatch , useSelector } from "react-redux";
import { uiAction } from "../../Store/Ui-Slice";
const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch()
  const toggleCartHandler = () => {
    dispatch(uiAction.toggle())
  }
  return (
    <button onClick={toggleCartHandler} className='button'>
      <span>My Cart</span>
      <span className='badge'>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
