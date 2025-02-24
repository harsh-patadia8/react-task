import ProductData from '../../data/ProductData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart, removeFromCart } from '../../redux/Cart'
import { useSelector, useDispatch } from 'react-redux'
import CartComponent from './CartComponent';


const Cart = () => {
  const elements = useSelector((state) => state.reducer.itemList);
  const dispatch = useDispatch()
  // function   
  if (elements.length > 0) {
    return (
      <div className='container'>
        <h1 className='mt-5 '> List cart details</h1>
        <div className='row mt-5'>
          {elements.map((item) => (
            <CartComponent
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
              id={item.id}
            />))}
        </div>
      </div >
    );
  } else {
    return <h1>Cart is empty</h1>;
  }
}
export default Cart;