import React from "react";
import classes from "./Menu.module.css"


const Menu = () => {
    <section>
        <div className={classes.menu}>
            <div className={classes.container}>
                <div className={classes.item1}>
                    <div>
                        <h3>Ocean Delite</h3>
                        <div className={classes.pizzabtn}><button>Add</button></div>
                    </div>
                    </div>
                   
                    <div className={classes.item2}>
                    <div>
                        <h3>BBQ Smoky Duck </h3>
                        <div className={classes.pizzabtn}><button>Add</button></div>
                    </div>
                    </div>

                    <div className={classes.item3}>
                    <div>
                        <h3>Alaska Fish</h3>
                        <div className={classes.pizzabtn}><button>Add</button></div>
                    </div>
                    </div>

                    <div className={classes.item4}>
                    <div>
                        <h3>Chicken Classic</h3>
                        <div className={classes.pizzabtn}><button>Add</button></div>
                    </div>
                    </div>

                    <div className={classes.item5}>
                    
                    <div>
                        <h3>Spicy Chicken</h3>
                        <div className={classes.pizzabtn}><button>Add</button></div>
                    </div>
                    </div>

                    <div className={classes.item6}>
                    <div>
                        <h3>Aloha</h3>
                        <div className={classes.pizzabtn}><button>Add</button></div>
                    </div>
                    </div>

                </div>
            </div>
    
    </section>

}

export default Menu;