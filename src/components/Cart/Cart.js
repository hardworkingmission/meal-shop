import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    //let addedCart=[]
    //addedCart.push(cart)
    //const{strMealThumb,strMeal,strArea,strCategory}=cart
    return (
        <>
        <h2 className='font-bold text-xl text-blue-600'>Added Items</h2>
          {
              cart.map(meal=>(
                <div className='col border-2 rounded-lg' key={meal.idMeal}>
                    <img src={meal.strMealThumb} alt="" style={{borderRadius:'5px',padding:'2px',}} className=''/>
                    <div className="p-2 mb-6">
                        <h4 className='font-bold'>{meal.strMeal}</h4>
                        <p>Origin: {meal.strArea}</p>
                        <i>Category: {meal.strCategory}</i>
                    </div>
                </div>
              ))

          }
        </>
        
    );
};

export default Cart;