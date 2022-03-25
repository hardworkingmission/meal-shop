import React, { useEffect, useState } from 'react';
import './Shop.css'
import Meal from '../Meal/Meal'
import Cart from '../Cart/Cart'
import { AddToMealDb,getMealFromDb,removeFromCart } from '../../utilities/mealDb';

const Shop = () => {
    const [meals,setMeals]=useState([])
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
          .then(res=>res.json())
          .then(data=>setMeals(data))
    },[])
    useEffect(()=>{
        const storedMeal=getMealFromDb()
        const savedMeal=[]
        try{
            for(const id in storedMeal){
                const getMeal=meals.meals?.find(meal=>meal.idMeal===id)
                if(getMeal){
                    savedMeal.push(getMeal)
                }
            }
        }catch(err){
            console.log(err)

        }
        setCart(savedMeal) 
        //console.log(storedMeal)
    },[meals])
    const handleAddToCart=(meal)=>{
        //console.log(meal)
        setCart([...cart,meal])
        AddToMealDb(meal.idMeal)
    }
    const handleDeleteFromCart=(id)=>{
        const restCart=cart.filter(c=>c.idMeal!==id)
        setCart(restCart)
        removeFromCart(id)
    }
    //console.log(cart)
    return (
        <section className='w-5/6 mx-auto'>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-3">
                <div className="col lg:col-span-2 md:col-span-2">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2 mt-4">
                        {
                            meals.meals?.map(meal=><Meal key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart} />)
                        }
                    </div>
                </div>
                <div className="col">
                    <div className="grid grid-cols-1 gap-2 mt-3 px-4">
                        {
                            <Cart cart={cart} handleDeleteFromCart={handleDeleteFromCart}/>
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Shop;