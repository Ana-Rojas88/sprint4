import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actionFilterRestaurantAsync, actionGetRestaurantAsync } from '../../redux/actions/restaurantAction';
import { category } from '../../services/dates';
import './style.scss'
import Carousel from "react-bootstrap/Carousel";

const Header = () => {
  const dispatch = useDispatch();
  const onFiltered = (searchValue) => {
    const searchParam = "category";
    dispatch(actionFilterRestaurantAsync(searchParam, searchValue));
  };
  return (

    <header className='header'>
      <div className='title'>
        <img src="https://i.ibb.co/Njh64cX/Vectorubicacion.png" alt="Vectorubicacion" />
        <p><span>DELIVER TO</span>
          <p>882 Well St, New-York</p></p>
      </div>
      <nav className='navbar'>
        <div className='navbar__img'>
          <img className='imgMenu' src="https://i.ibb.co/6HMwp7L/Imgmenu.png" alt="Imgmenu" />
          <img className='imgDelivery' src="https://i.ibb.co/2vkcyXh/Imgdeliver.png" alt="Imgdeliver" />
          <img className='imgMenu' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRgBoWGw5JvdDBsoZEB6dWVVUegC2yv_XuCRGZiMOFoHUCyj_J" alt="Menu Special Todays" />
          <img className='imgDelivery' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAa7X2qPss8Zlko3ZF1GsEs9lglJ7aWNSFxh8eG8HbAf-doS32" alt="Delivery" />
 </div>
 

        <h3>Restaurants and cafes</h3>
        <div className='menuFood'>
        <Button
        onClick={() => {
          dispatch(actionGetRestaurantAsync());
        }}
      >
        All
      </Button>
       
          {category.map((item) => (
            <Button
           
              key={item.value}
              onClick={() => {
                onFiltered(item.label);
              }}
            >
              {item.label}
            </Button>
          ))} </div>
          
      </nav>
    </header>
  )
}

export default Header