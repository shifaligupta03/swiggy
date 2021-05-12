import React from "react";
import { useAppContext } from "../../context/AppContext";
import { trimInput } from "../../utilities/utility";
import RestaurantCategory from '.././ResturantCategory/ResturantCategory';
import { ADDIONAL_CATEGORIES } from "../../constants/constants";

const RestaurantList = ()=>{
  const {restaurants, exclusiveRestaurants, allRestaurants,} = useAppContext();

  return (
    <div>
    {restaurants.map(({category, restaurantList}, key) => {
      const trimmedCategory = trimInput(category)
      return <div key={trimmedCategory} id={trimmedCategory}>
        <RestaurantCategory
        category={category}
        list={restaurantList}
        />
    </div>
    })
    }
     {ADDIONAL_CATEGORIES.map(({title, key}) => {
       const trimmedTitle = trimInput(title);
       return <div id={trimmedTitle} key={trimmedTitle}>
        <RestaurantCategory
        category={title}
        list={key==='all' ? allRestaurants : exclusiveRestaurants}
        />
     </div>
     })
    }
      
    </div>

  )
}

export default RestaurantList;
