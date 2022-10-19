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
              <Link to="/menu"><button className={classes.btn}>Order now</button></Link>
                </div>
                </div>
                 </div>
                 </div>
        </div>
    </section>
)
}

export default Home;
