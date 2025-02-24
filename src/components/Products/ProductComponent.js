import react from 'react';
import ProductData from '../../data/ProductData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Cart";

const ProductComponent = ({ name, id, price, desc }) => {
    const dispatch = useDispatch();
    const addCart = () => {
        dispatch(addToCart({ name, id, price, desc, totalPrice: price }));
    };
    return (
        <Card style={{ width: '18rem' }} key={id}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Button variant="primary" onClick={addCart}>add to cart</Button>
            </Card.Body>
        </Card>
    );
}
export default ProductComponent;