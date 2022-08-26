import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { uiActions } from '../../store/ui-slice';


const CartButton = () => {
 const dispatch = useDispatch()
 const cartQuantity = useSelector((state) => state.cart.totalQuantity);
    const toogleCartHandler = () => {
        dispatch(uiActions.toggle())
        console.log('click');
    }
    return(
        <button className={classes.button} onClick={toogleCartHandler}>
                        <FaShoppingCart className={classes.cart}/>
                        <div className={classes.badge}>{cartQuantity}</div>
                     </button>
    )
}

export default CartButton;