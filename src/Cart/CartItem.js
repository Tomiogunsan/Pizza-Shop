import React from 'react';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
 
const CartItem = (props) => {
      
    const {name, price,quantity, id} = props.item

    const dispatch = useDispatch();

    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price
        }))
    }

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id))
    }
    return(
    <li className={classes['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>${price.toFixed(2)}</span>
                    <span className={classes.amount}>x {quantity}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={removeItemHandler}>-</button>
                <button onClick={addItemHandler}>+</button>
            </div>
        </li>
    )
}

export default CartItem;