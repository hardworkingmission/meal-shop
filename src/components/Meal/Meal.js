import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Meal.css'

const Meal = ({meal,handleAddToCart}) => {
    const {strMeal,strMealThumb,strArea,strCategory}=meal
    //console.log(meal)
    return (
        <div className='col border-2 rounded-lg relative'>

            <img src={strMealThumb} alt="" style={{borderRadius:'5px',padding:'2px'}} />
            <div className="p-2 mb-6">
                <h4 className='font-bold'>{strMeal}</h4>
                <p>Origin: {strArea}</p>
                <i>Category: {strCategory}</i>
            </div>
            <button className='w-full content-center absolute bottom-0 bg-pink-300 text-blue-600 font-bold rounded-b-lg h-8 mt-5' onClick={()=>handleAddToCart(meal)}>Add toCart <FontAwesomeIcon icon={faCartPlus}/></button>
        </div>
    );
};

export default Meal;