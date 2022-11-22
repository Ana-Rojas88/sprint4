import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Footer from '../footer/Footer'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import './style.scss';
import { actionFilterRestaurantAsync, actionGetRestaurantAsync } from '../../redux/actions/restaurantAction';
import { actionFilterFoodAsync, actionGetFoodAsync } from '../../redux/actions/foodActions';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((store) => store.restaurantStore);
  const { food } = useSelector((store) => store.foodStore);
 
  console.log(food);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actionGetRestaurantAsync());
    dispatch(actionGetFoodAsync());
  }, [dispatch])

  useEffect(() => {
    dispatch(actionFilterFoodAsync());
  }, [dispatch])

  return (
    <>
      <Header />
      <main className='main'>

        {restaurant && restaurant.length ? (
          restaurant.map((restaurant, index) => (
            <article key={index} className='cardHome' onClick={()=>{navigate(`/restaurant/${restaurant.name}`)}}>
              <img src={restaurant.image} alt="Restaurant" />
              <div className='info'>
                <h3>{restaurant.name}</h3>
                <span>⭐⭐⭐⭐⭐</span>
                <span>Before you {restaurant.before}</span>
                <p>Work time {restaurant.time} </p>
              </div>
            </article>

          ))
        ) : (
          <></>
        )}

      </main>
  
      <Footer />
    </>
  )
}

export default Home