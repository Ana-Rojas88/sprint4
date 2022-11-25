import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminRestaurant = () => {
    const navigate = useNavigate();
    const returnProfile = () =>{
        navigate('/profile');
      }
      const addRestaurants = () =>{
        navigate('/addRestaurant');
      }
    
    const addFoods = () =>{
        navigate('/addFood');
      }
      const deleteRestaurants = () =>{
        navigate('/deleteRestaurant');
      }

      const deleteFood = () =>{
        navigate('/deleteFood');
      }

  return (
    <div className='btnsPerfil'>
         <span onClick={returnProfile}><img src="https://i.ibb.co/wdsNjML/Backreturn.png" alt="Backreturn" /></span>
        <button onClick={addRestaurants}>Agregar un nuevo restaurante</button>
        <button onClick={addFoods}>Agregar comidas a un restaurante</button>
        <button onClick={deleteRestaurants}>Eliminar un restaurante</button>
        <button onClick={deleteFood}>Eliminar una comida de un restaurante</button>
    </div>
  )
}

export default AdminRestaurant