import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { actionLogoutAsync } from '../../../redux/actions/UserActions';
import Footer from '../../footer/Footer';
import avatar from '../../../assets/usuario.png'
import arrowIcon from "../../../assets/atras.png";
import './style.scss';

const Profile = () => {
  
const [admim, setAdmim] = useState(false)
const navigate = useNavigate();
const user = useSelector((store) => store.user);

console.log(user.name);
  const dispatch = useDispatch();
  const onCloseSession = () => {
      dispatch(actionLogoutAsync());
    };
 

const adminRestaurants = () =>{
  navigate('/adminRestaurant');
}

const accountEdit = () =>{
  navigate('/accountedit');
}



const adminLogged = ()=>{
  if(user.email === "paola.torres281109@gmail.com"){
   setAdmim(true)
  }
}

useEffect(() => {
adminLogged();
  
}, [])



  return (
    <>
    <section className='perfil'>
    <span onClick={()=>navigate('/home')}><img src={arrowIcon} alt="Backreturn" className='arrow'/></span>
      <div className='perfil__info'>
      <img src={user.avatar ? user.avatar : avatar }alt="Imagen de perfil" />
          <span>{user.name}</span>
      </div>
     
    <div className='btnsPerfil'>
      <button onClick={accountEdit}>Account edit</button>
      <button>Payment</button>
      <button>Language</button>
      <button>Location</button>
      <button>FAQ</button>
      <button>Support</button>
      <button onClick={onCloseSession}>Cerrar sesión</button>
      {
        admim ? (
          <button  onClick={adminRestaurants}>Administrator</button>
        ) : (
          <></>
        )
      }
     
    </div>
    </section>
    <Footer />
    </>
  )
}

export default Profile