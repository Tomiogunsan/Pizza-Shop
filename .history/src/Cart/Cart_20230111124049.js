import React, {useState} from 'react';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { uiActions } from '../store/ui-slice';
import Checkout from './Checkout';




const Cart = (props) => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const dispatch = useDispatch();
    const closeCartHandler = () => {
        dispatch(uiActions.toggle())
    }
const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
const cartItems = useSelector((state) => state.cart.items)

const hasItems = cartItems.length > 0;    

const[isCheckOut, setIsCheckOut] = useState(false);

const orderHandler = () => {
    setIsCheckOut(true);
}

const submitOrderHandler =  async (userData) => {
    setIsSubmitting(true);
   await  fetch('https://menu-d7b0e-default-rtdb.firebaseio.com/', {
        method: 'PUT',
        body: JSON.stringify({user: userData,
                                orderedItems: cartItems})
    })
    setIsSubmitting(false);
    setDidSubmit(true);
    
};

const CartItems = (<ul className={classes['cart-items']}>
{cartItems.map((item) => <CartItem key={item.id}
                                 item={{
                                     id:item.id,
                                     name: item.name,
                                     quantity:item.quantity,
                                     price: item.price,
    
    }}/> ) }
    </ul>)

const modalActions = (<div className={classes.actions}>
    <button className={classes['button--alt']} onClick={closeCartHandler}>Close</button>
  {hasItems &&  (<button className={classes.button} onClick={orderHandler}>Order</button>)}
</div>)

const cartModalContent = (
    <React.Fragment>
         {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${cartTotalAmount}.00</span>
            </div>
            
            {isCheckOut && <Checkout onConfirm={submitOrderHandler}/>}
            {!isCheckOut && modalActions}
    </React.Fragment>

)

    const isSubmittingModalContent = <p style={{fontSize: '2rem'}}>Sending order data...</p>;

        const didSubmitModalContent = (
    <React.Fragment>
      <p style={{fontSize: '2rem'}}>Successfully sent the order!</p>
      <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={closeCartHandler}>Close</button>
      </div>
      </React.Fragment>
        )

    return(
        <div className={classes['cart-container']}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
            </div>  
    )
}

export default Cart;
