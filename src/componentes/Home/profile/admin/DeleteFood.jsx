import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionDeleteFoodAsync, actionGetFoodAsync } from '../../../../redux/actions/foodActions';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';


const DeleteFood = () => {
  const dispatch = useDispatch();
  const { food } = useSelector((store) => store.foodStore);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actionGetFoodAsync());
  }, [])

  const adminRestaurant = () => {
    navigate('/adminRestaurant');
}
  return (
    <div className='delete'>
      <span onClick={adminRestaurant}><img src="https://i.ibb.co/wdsNjML/Backreturn.png" alt="Backreturn" /></span><br />
      {food && food.length ? (
        food.map((food, index) => (
          <article key={index} className='card'>
            <img src={food.image} alt="Restaurant" />
            <div className='info'>
              <h6>{food.name}</h6>
              <span>$ {food.price}</span>
              <p>{food.idRestaurant} </p>
            </div>
            <button onClick={() => {
              dispatch(actionDeleteFoodAsync(food))
              Swal.fire(
                "Se ha eliminado con exito",
                "success"
              )
            }}>
              Delete
            </button>
          </article>

        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default DeleteFood