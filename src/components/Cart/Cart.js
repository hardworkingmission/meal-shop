import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
const Cart = ({cart,handleDeleteFromCart}) => {
    //let addedCart=[]
    //addedCart.push(cart)
    //const{strMealThumb,strMeal,strArea,strCategory}=cart
    return (
        <>
        <h2 className='font-bold text-xl text-blue-600'>Added Items</h2>
          {
              cart.map(meal=>(
                <div className='col border-2 rounded-lg relative' key={meal.idMeal}>
                    <img src={meal.strMealThumb} alt="" style={{borderRadius:'5px',padding:'2px',}} className=''/>
                    <div className="p-2 mb-6">
                        <h4 className='font-bold'>{meal.strMeal}</h4>
                        <p>Origin: {meal.strArea}</p>
                        <i>Category: {meal.strCategory}</i>
                    </div>
                    <button className='w-full content-center absolute bottom-0 bg-red-600 text-white font-bold rounded-b-lg h-8 mt-5' onClick={()=>handleDeleteFromCart(meal.idMeal)}>Remove <FontAwesomeIcon icon={faTrash}/></button>
                </div>
              ))

          }
        </>
        
    );
};

export default Cart;