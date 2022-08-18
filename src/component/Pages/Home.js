import React from "react";

import { Link } from "react-router-dom";

import classes from "./Home.module.css";



const Home = () => {
return(
    <section>
        <div  className={classes.home}>
            <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.background}>
            <h3>Delicious Pizza</h3>
            <p>Enjoy delicious pizza far away from home. Helping you enjoy yummy pizza anywhere
                 and anytime on the go</p>
              
               <div>
                <button className={classes.btn}> <Link to="/menu">Order now</Link></button>
                </div>
                </div>
                 </div>
                 </div>
        </div>
    </section>
)
}

export default Home;