import React, {useState} from "react";
import {getRandomImage} from "../../utilities/utility";
import { images } from '../../constants/constants';
import './style.css'

const RestaurantCard = ({restaurant})=>{
  const [foodType] = useState(restaurant.food_types.reduce((acc, curr) => acc + ', ' + curr));
  return (
    <div className='card'>
      <img src={getRandomImage(images,restaurant.name)} alt=""/>
      <div className='title'>
        {restaurant.name}
      </div>
      <div className="subtitle">{foodType}</div>
      <div className="details">
        <span className='rating'>
          &#9733; {restaurant.ratings}
        </span>
        .
        <span className='subdetails'>{restaurant.delivery_time}</span>
        .
        <span className='subdetails'>₹{restaurant.price_for_two} for two</span>
      </div>
    </div>
  )
}

export default RestaurantCard;
