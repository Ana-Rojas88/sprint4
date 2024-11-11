import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDeleteRestaurantAsync, actionGetRestaurantAsync } from '../../../../redux/actions/restaurantAction';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';


const DeleteRestaurant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurant } = useSelector((store) => store.restaurantStore);
  useEffect(() => {
    dispatch(actionGetRestaurantAsync());
  }, [])

  const adminRestaurant = () => {
    navigate('/adminRestaurant');
}

  return (
    <>
     <span onClick={adminRestaurant}><img src="https://i.ibb.co/wdsNjML/Backreturn.png" alt="Backreturn" /></span><br />
     <h2 style={{textAlign:'center'}}>Restaurantes</h2>
    <div className='delete'>
        {restaurant && restaurant.length ? (
          restaurant.map((restaurant, index) => (
            <article key={index} className='card'>
              <img src={restaurant.image} alt="Restaurant" />
              <div className='info'>
                <h6>{restaurant.name}</h6>
                <p>Work time {restaurant.time} </p>
              </div>
              <button onClick={() => {
                    dispatch(actionDeleteRestaurantAsync(restaurant))
                    Swal.fire(
                      "Se ha eliminado con exito",
                      "success"
                    )}} className='btn btn-danger'>
                  Delete
                </button>
            </article>

          ))
        ) : (
          <></>
        )}

      </div>
      </>
  )
}

export default DeleteRestaurant