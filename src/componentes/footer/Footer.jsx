import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { actionLogoutAsync } from '../../redux/actions/UserActions';
import './style.scss'

const Footer = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const onCloseSession = () => {
  //     dispatch(actionLogoutAsync());
  //   }

  const filterFooter = () =>{
    navigate('/search');
  }
  
  const home = () =>{
    navigate('/home');
  }
  const profile = () =>{
    navigate('/profile');
  }
  const order = () =>{
    navigate('/order');
  }
  

    return (
        <footer>
            <button onClick={home}><img src="https://i.ibb.co/d5KFZD9/Svg-1.png" alt="Home" border="0" /></button>
            <button onClick={filterFooter}><img src="https://i.ibb.co/syQ2PvC/Svg-2.png" alt="Search" border="0" /></button>
            <button onClick={order}><img src="https://i.ibb.co/M8QdhCR/Svg-3.png" alt="Time" border="0" /></button>
            <button onClick={profile}><img src="https://i.ibb.co/GP9rycb/Svg-4.png" alt="Sesión" border="0" /></button>


        </footer>
    )
}

export default Footer