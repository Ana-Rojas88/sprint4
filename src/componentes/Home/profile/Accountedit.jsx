import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import avatar from '../../../assets/usuario.png'
import arrowIcon from "../../../assets/atras.png";
import Footer from '../../footer/Footer';

const Accountedit = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const returnProfile = () =>{
        navigate('/profile');
      }

  return (
    <>
    <section className='perfil'>
        <span onClick={returnProfile}><img src={arrowIcon} alt="Backreturn" className='arrow'/></span>
           <div className='perfil__info'>
           <img src={user.avatar ? user.avatar : avatar }alt="Imagen de perfil" />
      </div>
      <div className='btnsPerfil'>
      <button>{user.name}</button>
      <button>{user.email}</button>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Accountedit