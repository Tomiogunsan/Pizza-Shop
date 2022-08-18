import React , {useState} from 'react';
import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";
import logo from "../../images/logo3.jpg";
import { FaShoppingCart , FaTimes} from "react-icons/fa";
import {FiMenu} from 'react-icons/fi';

const data = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "About Us",
        to: "/about",
    },
    {
        label: "Menu",
        to: "/menu",
    },
    {
        label: "Reviews",
        to: "/reviews",
    },
    {
        label: "Contact",
        to: "/contact",
    },
];


const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    const isToggle = toggleIcon ? classes.active : ''
    return(
        <div className={classes.header}>
            
          
            <div className={classes.container}>
                <img src={logo} alt={"A logo"}></img> 
            </div>
            <nav className={classes.navbar}>
                <ul className= {`${classes.menu} ${isToggle}`} >
                    {data.map((item, key) =>(<li className={classes.list} key={key}>
                        <Link  className={(navData) => navData.isActive ? classes.active: " "}to={item.to}>
                            {item.label}
                        </Link>
                   
                    </li>))}
                   
                     </ul>
                     </nav>
                    
                     <div className={classes.icons}>
                     <button className={classes.button}>
                        <FaShoppingCart className={classes.cart}/>
                        <div className={classes.badge}>3</div>
                     </button>
                <div className={classes.bar} onClick={handleToggleIcon}>
              { toggleIcon ? <FaTimes style={{color: "black"}} size={30} />  :<FiMenu  size={30}/>}
            </div>
            </div> 
            

            

        </div>
    )
}

export default Navbar;