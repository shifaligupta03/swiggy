import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { trimInput } from "../../utilities/utility";
import './SideBar.css';

function SideBar() {
  const [ restaurantsCount, setRestaurantsCount] = useState([]);
  const { restaurants, categories, selectedCategory, exclusiveRestaurants, allRestaurants } = useAppContext();

  
  useEffect(()=>{
    const count = [...restaurants.map(restaurantsCategory => restaurantsCategory.restaurantList.length),
       exclusiveRestaurants.length, 
       allRestaurants.length
      ]
    setRestaurantsCount(count)
  },[allRestaurants.length, exclusiveRestaurants.length, restaurants])

   return (
    <div className="main">
      <div className='container'>
        {categories.map((item, key)=> {
          const trimmedItem = trimInput(item);
          const trimmedCategory = trimInput(selectedCategory);
          return (
            <a
              key={trimmedItem}
              className={`item ${trimmedItem === trimmedCategory ? 'selected' : ''}`}
              href={`#${trimmedItem}`}
            >
              <div>
                <div className="title">
                  {item}
                </div>
                <div className='subtitle'>
                  {restaurantsCount[key] || 0} Options
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar;


