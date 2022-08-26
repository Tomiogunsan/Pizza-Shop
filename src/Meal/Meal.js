import React from 'react';
import classes from './Meal.module.css';
import MealItem from './MealItem';
import imageOne from '../images/menu1.jpg';
import imageTwo from '../images/menu2.jpg';
import imageThree from '../images/menu3.jpg';
import imageFour from '../images/menu4.jpg';
import imageFive from '../images/backgroung2.jpg';
import imageSix from '../images/menu6.jpg.jpg';

const mealLists = [
    {
        id: "m1",
        price: 17,
        name: "Ocean Delite",
        image: imageOne,
    },
    {
        id: "m2",
        price: 19,
        name: "BBQ Smoky",
        image: imageTwo
    },
    {
        id: "m3",
        price: 22,
        name: "Aloha Veggies",
        image: imageThree
    },
    {
        id: "m4",
        price: 22,
        name: "Alaska Fish",
        image: imageFour
    },
    {
        id: "m5",
        price: 15,
        name: "Chicken Classic",
        image: imageFive
    },
    {
        id: "m6",
        price: 14,
        name: "Spicy Chicken",
        image: imageSix
    },

]

const Meals = () =>{
    return(
        <section>
            <ul  className={classes.container}>
                
            {mealLists.map((item) => (
               <MealItem 
               key={item.id}
               id={item.id}
               name={item.name}
               price={item.price}
               image={item.image}
               /> 
            ))}
            
            </ul>
        </section>
    )
}

export default Meals;