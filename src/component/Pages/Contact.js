import React from 'react';
import classes from './Contact.module.css';

const Contact = () => {
    return(
        <section>
            <div className={classes.contact}>
                <div className={classes.container}>
                    <div className={classes['form-container']}>
                        <form>
                            <h1><span>Contact</span> Us</h1>
                            <div>
                                <label>Name</label>
                                <input type="text" placeholder='Enter your name'/>
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" placeholder='Enter your email'/>
                            </div>
                            <div>
                                <label>Message</label>
                                <textarea rows="10" placeholder='Enter a message'/>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact;