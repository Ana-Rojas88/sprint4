import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { actionLogoutAsync } from '../../redux/actions/UserActions';
import Footer from '../footer/Footer';
import './style.scss'

const Profile = () => {
const navigate = useNavigate();
  const {displayName} = useSelector((store)=>store.user);
 console.log(displayName);
  const dispatch = useDispatch();
  const onCloseSession = () => {
      dispatch(actionLogoutAsync());
    };
 
// const infoUser = () =>{
//   const dataUser = users.user.slice();
//   const getUsers = dataUser.find(item => item.name); 
//   console.log(getUsers);
// }
const addRestaurant = () =>{
  navigate('/addRestaurant');
}



  return (
    <section className='perfil'>
    <div className='btnsPerfil'>
      <button onClick={onCloseSession}>Cerrar sesión</button>
      <button onClick={addRestaurant}>Agregar Nuevo Restaurante</button>
    </div>
    <Footer />
    </section>
  )
}

export default Profile