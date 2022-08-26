import React from 'react';
import classes from './MealItem.module.css';
import {useDispatch} from 'react-redux';
import { cartActions } from '../store/cartSlice';

const MealItem = (props) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price,
        }))
    }
    const {name, price, id,image} = props
    return(
        
            
        <li className={classes.item}>
            
             <img src={image}  alt='A pizza'/>
            
             
                <h3>{name}</h3>
                
                <div className={classes.price}>${price.toFixed(2)}</div>
                <div><button onClick={addToCartHandler}>Add</button></div>
                
            
        </li>
       
    
    )
}

export default MealItem;