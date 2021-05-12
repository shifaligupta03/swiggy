import React, {useEffect, useRef, useState} from "react";
import { useAppContext } from "../../context/AppContext";
import { trimInput } from "../../utilities/utility";
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './style.css';


const RestaurantCategory = ({category, list})=>{
  const { setSelectedCategory, scrollPosition} = useAppContext();
  const [restaurantVisible, setRestaurantVisible] = useState(5);
  const listRef = useRef(null);

  useEffect(()=>{
    const top = listRef.current.getBoundingClientRect().top;
    const bottom = listRef.current.getBoundingClientRect().bottom;
    if (top < 60 && bottom > 0) {
      setSelectedCategory(category);
    }
  }, [category, scrollPosition] );


  const handleLoadMore = ()=>{
    const count = restaurantVisible + 6 > list.length ? list.length : restaurantVisible + 6
    setRestaurantVisible(count);
  }

  const trimmedCategory = trimInput(category);
  const moreRestuarants = list.length - restaurantVisible
  return (
    <div ref={listRef} key={trimmedCategory}>
    <div className='category'>{category}</div>
    <div className="restaurantlist">
      {list.slice(0, restaurantVisible).map((restaurant, key) => (
        <RestaurantCard key={key} restaurant={restaurant}/>
      ))}
      {restaurantVisible < list.length &&
      <button className="loadmore" onClick={handleLoadMore}>
        + {moreRestuarants} MORE
      </button>
      }
    </div>
</div>

  )
}

export default RestaurantCategory;
