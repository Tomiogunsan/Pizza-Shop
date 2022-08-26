import React , {useRef, useState} from 'react';
import classes from './Checkout.module.css';
import {useDispatch} from 'react-redux';
import { uiActions } from '../store/ui-slice';

  const isEmpty = (value) => value.trim() === '';
  const isTenChars = (value) => value.trim().length === 11;  

const Checkout = (props) => {

    const[formInputValidity, setFormInputValidity] = useState({
                                            name: true,
                                            address: true,
                                            number: true,
                                             })
    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const numberInputRef = useRef();
    

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredNumber = numberInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredNumberIsValid = isTenChars(enteredNumber);

        setFormInputValidity({
            name: enteredNameIsValid,
            address: enteredAddressIsValid,
            number: enteredNumberIsValid
        })

        const formIsValid = enteredNameIsValid && 
                            enteredAddressIsValid && 
                            enteredNumberIsValid;

                if(!formIsValid){
                    return;
                }

                props.onConfirm ({
                    name: enteredName,
                    address: enteredAddress,
                    phoneNumber: enteredNumber
                })
     }

    const dispatch = useDispatch();
    const closeFormHandler = () => {
        dispatch(uiActions.toggle())
        console.log('click');
    }

    const nameControlClasses = `${classes.control} ${
        formInputValidity.name ? '' : classes.invalid
      }`;

      const addressControlClasses = `${classes.control} ${
        formInputValidity.address? '' : classes.invalid
      }`;

      const numberControlClasses = `${classes.control} ${
        formInputValidity.number ? '' : classes.invalid
      }`;

    

return(
    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={ nameControlClasses}>
            <label htmlFor= 'name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef}/>
            {!formInputValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={addressControlClasses}>
            <label htmlFor= 'address'>Address</label>
            <input type='text' id='address' ref={addressInputRef}/>
            {!formInputValidity.address && <p>Please enter a valid address!</p>}
        </div>
       
        <div className={ numberControlClasses}>
            <label htmlFor= 'phone number'>Phone Number</label>
            <input type='number' id='number' ref={numberInputRef}/>
            {!formInputValidity.number && <p>Please enter a valid phone number!</p>}
        </div>

        <div className={classes.actions}>
            <button onClick={closeFormHandler}>Cancel</button>
            <button>Confirm</button>
        </div>
    </form>
)
}

export default Checkout