import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Accountedit = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const returnProfile = () =>{
        navigate('/profile');
      }

  return (
    <section className='perfil'>
        <span onClick={returnProfile}><img src="https://i.ibb.co/wdsNjML/Backreturn.png" alt="Backreturn" /></span>
           <div className='perfil__info'>
          <img src={user.avatar} alt="Imagen de perfil" />    
      </div>
      <div className='btnsPerfil'>
      <button>{user.name}</button>
      <button>{user.email}</button>
      </div>
    </section>
  )
}

export default Accountedit