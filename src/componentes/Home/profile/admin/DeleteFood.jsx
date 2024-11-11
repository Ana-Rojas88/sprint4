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
    <>
   <span onClick={adminRestaurant} className='m-4'><img src="https://i.ibb.co/wdsNjML/Backreturn.png" alt="Backreturn" /></span><br />
   <h2 style={{textAlign:'center'}}>Comidas</h2>
    <div className='delete'>
      {food && food.length ? (
        food.map((food, index) => (
          <article key={index} className='card'>
            <img src={food.image} alt="Restaurant" />
            <div className='info'>
              <h6>Nombre: {food.name}</h6>
              <span>Precio: $ {food.price}</span>
              <p>Restaurante: {food.idRestaurant} </p>
            </div>
            <button onClick={() => {
              dispatch(actionDeleteFoodAsync(food))
              Swal.fire(
                "Se ha eliminado con exito",
                "success"
              )
            }} className='btn btn-danger'>
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

export default DeleteFood