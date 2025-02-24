import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/Cart";
import Card from 'react-bootstrap/Card';

const CartComponent = ({ name, price, quantity, totalPrice, id }) => {
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(addToCart({ name, price, id }));
    };
    const decrement = () => {
        dispatch(removeFromCart({ id, quantity, totalPrice, price }));
    };
    return (
        <Card style={{ width: '18rem' }} key={id}>
            <Card.Body>
                <Card.Title>Name: {name}</Card.Title>
                <Card.Text>Product Price: {price}</Card.Text>
                <Card.Text>Total price: {totalPrice}</Card.Text>
                <span className='mx-2'>
                    <button aria-label="Increment value" className="mx-2" onClick={increment}> + </button>
                    <span className="mx-1">{quantity}</span>
                    <button aria-label="Decrement value" className="mx-2" onClick={decrement}> - </button>
                </span>
            </Card.Body>
        </Card>
    );
};

export default CartComponent;