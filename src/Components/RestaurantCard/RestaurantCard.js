import React, {useState} from "react";
import {getImage} from "../../utilities/utility";
import { images } from '../../constants/constants';
import './style.css'

const RestaurantCard = ({restaurant:{food_types, name, ratings, delivery_time, price_for_two}})=>{
  const [foodType] = useState(food_types.reduce((acc, curr) => acc + ', ' + curr));
  const image = getImage(images,name)
  return (
    <div className='card'>
      <img src={image} alt={name}/>
      <div className='title'>
        {name}
      </div>
      <div className="subtitle">{foodType}</div>
      <div className="details">
        <span className='rating'>
          &#9733; {ratings}
        </span>
        .
        <span className='subdetails'>{delivery_time}</span>
        .
        <span className='subdetails'>₹{price_for_two} for two</span>
      </div>
    </div>
  )
}

export default RestaurantCard;
