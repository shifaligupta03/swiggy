import React, {useEffect, useState, useCallback} from 'react';
import SideBar from "../SideBar/SideBar";
import RestaurantList from "../RestaurantList/RestaurantList";
import {URL} from '../../constants/config'
import { AppContext } from '../../context/AppContext';
import { ADDIONAL_CATEGORIES } from '../../constants/constants';
import './style.css';

function App() {
  
  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [exclusiveRestaurants, setExclusiveRestaurants] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('popular brands');

  const value ={
    restaurants,
    categories,
    selectedCategory,
    setSelectedCategory,
    exclusiveRestaurants,
    allRestaurants,
    scrollPosition,
  }

  const getRestaurants = useCallback(async()=>{
    const response = await fetch(URL.DATA);
    const data = await response.json();
    const additionalCategories = ADDIONAL_CATEGORIES.map((item)=>item.title);
    const allCategories = [...data.map(restaurantsCategory => restaurantsCategory.category), ...additionalCategories];
    setRestaurants(data);
    setCategories(allCategories);
  },[]);

  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(window.pageYOffset + window.innerHeight)
    }
  }, []);

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    const allResturants = restaurants.reduce((prev, next)=>[...next.restaurantList,...prev], []);
    setAllRestaurants([...allResturants]);
    setExclusiveRestaurants(allResturants.filter(restaurant => restaurant.isExlusive))
  }, [restaurants]);

  return (
    <div className="App">
      <AppContext.Provider value={value}>
        <SideBar/>
        <RestaurantList/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
